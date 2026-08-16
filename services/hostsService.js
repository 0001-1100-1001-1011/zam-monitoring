const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getHosts() {
  try {
    const res = await fetch(`${VITE_API_URL}/api/hosts`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to GET Hosts");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to GET Hosts:", error);
    throw error;
  }
}
