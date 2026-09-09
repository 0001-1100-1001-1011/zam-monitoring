import { refreshService } from "./refreshService.js";

export async function getCves(accessTokenContext, setAccessTokenContext, retry = true) {
  try {
    const res = await fetch(`/api/cves`, {
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
      return getCves(refreshedToken, setAccessTokenContext, false);
    } else {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to GET CVEs");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch");
  }
}
