import { refreshService } from "./refreshService.js";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getHosts() {
  try {
    const res = await fetch(`${VITE_API_URL}/api/hosts`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("zamAccess")}`,
      },
    });

    switch (res.status) {
      case res.ok: {
        const data = await res.json();
        return data;
      }

      case 401:
        await refreshService();
        return getHosts();

      case !res.ok: {
        const error = await res.json();
        console.error(error);
        throw new Error("Failed to GET Hosts");
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch: ", error);
  }
}
