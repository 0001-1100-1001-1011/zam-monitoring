export async function registerService(registerData) {
  try {
    const res = await fetch(`/auth/register`, {
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
    await res.json();
    return true;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch");
  }
}
