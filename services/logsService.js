import { refreshService } from "./refreshService.js";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getLogs(query) {
  try {
    const res = await fetch(`${VITE_API_URL}/api/logs/${query}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("zamAccess")}`,
      },
    });

    switch (res.status) {
      case res.ok: {
        const data = res.json();
        return data;
      }

      case 401: {
        await refreshService();
        return getLogs(query);
      }

      case !res.ok: {
        const error = res.json();
        console.error(error);
        throw new Error("Failed to GET Logs query");
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch");
  }
}
