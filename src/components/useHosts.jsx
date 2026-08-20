import { useEffect, useState, useCallback } from "react";
import { getHosts } from "../../services/hostsService.js";

export function useHosts({ interval = 10000 } = {}) {
  const [hosts, setHosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hostOnline = (lastSeen) => {
    if (!lastSeen) return false;

    const lastSeenTime = new Date(lastSeen).getTime();
    const currentTime = new Date().getTime();
    const online = currentTime - lastSeenTime;

    // difference <= 5 Min.
    return online <= 5 * 60 * 1000;
  };

  const fetchHosts = useCallback(async () => {
    try {
      const data = await getHosts();
      const list = data ?? [];
      console.log("REFETCH");
      const hostsStatus = list.map((host) => ({
        ...host,
        online: hostOnline(host.last_seen),
      }));

      setHosts(hostsStatus);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const loadHosts = async () => {
      await fetchHosts();
    };
    loadHosts();

    const id = setInterval(fetchHosts, interval);
    return () => clearInterval(id);
  }, [fetchHosts, interval]);
  return {
    hosts,
    loading,
    error,
    refetch: fetchHosts,
  };
}
