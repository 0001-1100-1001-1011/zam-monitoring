const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function refreshService(setAccessTokenContext) {
  try {
    const res = await fetch(`${VITE_API_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to get refresh token: ", error);
    }
    const data = await res.json();
    setAccessTokenContext(data.accessToken);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch: ", error);
  }
}
