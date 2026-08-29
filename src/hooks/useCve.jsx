const INTERVAL = import.meta.env.VITE_INTERVAL;

import { useEffect, useState, useCallback, useContext } from "react";
import { getCves } from "../../services/cveService.js";
import { AuthContext } from "../state/authContext.jsx";

const defaultNormalize = (items) =>
  items.map((cve) => ({
    ...cve,
  }));

export function useCve({ normalize = defaultNormalize } = {}) {
  const { accessTokenContext, setAccessTokenContext } = useContext(AuthContext);
  const [cves, setCves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchCves = useCallback(async () => {
    try {
      const data = await getCves(accessTokenContext, setAccessTokenContext);
      const list = data ?? [];

      const normalized = normalize(list);

      const filtered = normalized.filter(
        (cve) =>
          cve.cve_id.toLowerCase().includes(search.toLowerCase()) ||
          cve.product.toLowerCase().includes(search.toLowerCase()) ||
          cve.description.toLowerCase().includes(search.toLowerCase()),
      );

      setCves(filtered);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [search, normalize, accessTokenContext, setAccessTokenContext]);

  useEffect(() => {
    (async () => {
      await fetchCves();
    })();

    const id = setInterval(fetchCves, INTERVAL);
    return () => clearInterval(id);
  }, [fetchCves]);

  return {
    cves,
    loading,
    error,
    search,
    setSearch,
    refetch: fetchCves,
  };
}
