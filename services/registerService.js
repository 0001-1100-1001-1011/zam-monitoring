const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function registerService(registerData) {
  try {
    const res = await fetch(`${VITE_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to register");
    }
    const data = await res.json();
    localStorage.setItem("t", data);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch");
  }
}
