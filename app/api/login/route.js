import { cookies } from "next/headers";

export async function POST(req) {
  const { username, password } = await req.json();

  const res = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (res.ok) {
    const payload = await res.json();
    cookies().set("token", payload, { secure: true });
    window.location.href = "/";
  }

  return res;
}
