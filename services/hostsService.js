import { refreshService } from "./refreshService.js";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getHosts(accessTokenContext, setAccessTokenContext, retry = true) {
  try {
    const res = await fetch(`/api/hosts`, {
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
    if (res.status === 401 && retry) {
      const refreshedToken = await refreshService(setAccessTokenContext);
      return getHosts(refreshedToken, setAccessTokenContext, false);
    } else {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to GET Hosts");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch");
  }
}
