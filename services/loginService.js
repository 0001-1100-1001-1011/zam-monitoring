export async function loginAdmin(loginData, setAccessTokenContext) {
  try {
    const res = await fetch(`/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw new Error("Failed to Sign in");
    }
    const data = await res.json();
    setAccessTokenContext(data.accessToken);
    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch");
  }
}
