import { useEffect, useState, useCallback } from "react";
import { getSoftwares } from "../../services/softwaresService";

export function useSoftware({ interval = 15000 } = {}) {
  const [clients, setClients] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchSoftware = useCallback(async () => {
    try {
      const data = await getSoftwares;
      const list = data.clients ?? [];
      setClients(list);

      if (!selectedClientId && list.length > 0) {
        setSelectedClientId(list[0].clientId);
      }

      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedClientId]);

  useEffect(() => {
    (async () => {
      await fetchSoftware();
    })();

    const id = setInterval(fetchSoftware, interval);
    return () => clearInterval(id);
  }, [fetchSoftware, interval]);

  const selectedClient = clients.find((c) => c.clientId === selectedClientId);

  const filteredSoftware = (selectedClient?.software ?? []).filter((s) =>
    s.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    clients,
    selectedClient,
    filteredSoftware,
    selectedClientId,
    setSelectedClientId,
    loading,
    error,
    search,
    setSearch,
    refetch: fetchSoftware,
  };
}
