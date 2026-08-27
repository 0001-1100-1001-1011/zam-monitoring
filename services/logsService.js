import { refreshService } from "./refreshService.js";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getLogs(query, accessTokenContext, setAccessTokenContext, retry = true) {
  try {
    const res = await fetch(`${VITE_API_URL}/api/logs/${query}`, {
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
      return getLogs(query, refreshedToken, setAccessTokenContext, false);
    } else {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to GET Logs");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch");
  }
}
