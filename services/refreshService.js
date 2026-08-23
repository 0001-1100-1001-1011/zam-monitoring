const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function refreshService() {
  try {
    const res = await fetch(`${VITE_API_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("zamRefresh")}`,
      },
    });
    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw ("Failed to get refresh token: ", error);
    }
    const data = await res.json();
    localStorage.setItem("refreshToken", data.refreshToken);
  } catch (error) {
    console.error("Failed to fetch: ", error);
    throw ("Failed to fetch: ", error);
  }
}
