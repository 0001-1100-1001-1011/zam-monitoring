const VITE_API_URL = import.meta.env.VITE_API_URL;

let refreshPromise = null;

export async function refreshService(setAccessTokenContext) {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const res = await fetch(`/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        const error = await res.json();
        console.error(error);
        throw new Error("Failed to get refresh token");
      }
      const data = await res.json();
      setAccessTokenContext(data.accessToken);
      return data.accessToken;
    })().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}
