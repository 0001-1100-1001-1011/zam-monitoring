const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function getLogs(query) {
  try {
    const res = await fetch(`${VITE_API_URL}/api/logs/${query}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!res.ok) {
      const error = res.json();
      console.log(error);
      throw new Error("Failed to GET Logs query");
    }
    const data = res.json();
    return data;
  } catch {
    throw new Error("Failed to fetch");
  }
}
