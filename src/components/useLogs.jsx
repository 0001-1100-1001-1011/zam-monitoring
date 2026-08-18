import { useEffect, useState, useCallback } from "react";

const API_URL = "http://localhost:3000";

const defaultNormalize = (logs) =>
  logs.map((l) => ({
    id: l.id,
    TimeCreated: l.time_created
      ? new Date(l.time_created).toLocaleString("de-DE")
      : "—",
    Hostname: l.hostname,
    EventID: l.event_id,
    Level: l.level,
    Message: l.message?.length > 80 ? l.message.slice(0, 80) + "…" : l.message,
    _fullMessage: l.message,
  }));

export function useLogs(
  source,
  { limit = 50, Interval = 10000, normalize = defaultNormalize } = {},
) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevel] = useState("");

  const fetchLogs = useCallback(async () => {
    try {
      let url = `${API_URL}/api/logs?source=${source}&limit=${limit}`;
      if (levelFilter) url += `&level=${levelFilter}`;
      if (search) url += `&search=${encodeURIComponent(search)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Server-Fehler");
      const data = await res.json();
      setLogs(normalize(data.logs ?? []));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [source, limit, levelFilter, search, normalize]);

  useEffect(() => {
    (async () => {
      await fetchLogs();
    })();

    const interval = setInterval(fetchLogs, Interval);
    return () => clearInterval(interval);
  }, [fetchLogs, Interval]);

  return {
    logs,
    loading,
    error,
    search,
    setSearch,
    levelFilter,
    setLevel,
    refetch: fetchLogs,
  };
}
