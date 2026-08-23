const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function loginAdmin(loginData) {
  try {
    const res = await fetch(`${VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!res.ok) {
      console.log(res.json());
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to Sign in");
    }
    const data = await res.json();
    localStorage.setItem("zamAccess", data.accessToken);
    localStorage.setItem("zamRefresh", data.refreshToken);
    return true;
  } catch (error) {
    console.error("Failed to fetch: ", error);
    throw new Error("Failed to fetch");
  }
}
