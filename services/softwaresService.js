import { refreshService } from "./refreshService.js";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getSoftwares(accessTokenContext, setAccessTokenContext) {
  try {
    const res = await fetch(`${VITE_API_URL}/api/Softwares`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessTokenContext}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }
    if (res.status === 401) {
      const refreshedToken = await refreshService(setAccessTokenContext);
      return getSoftwares(refreshedToken, setAccessTokenContext);
    } else {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to GET Software");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch: ", error);
  }
}
