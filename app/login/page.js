"use client";
import Link from "next/link";

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.ok) {
      window.location.href = "/";
    }
  };

  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content flex-wrap lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">ReVint</h1>
          <p className="py-6">Inicio de sesión</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="contraseña"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Olvidé la contraseña
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Iniciar Sesion
              </button>
              <Link href="/register">
                <button className="btn">No tienes una cuenta?</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
