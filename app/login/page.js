export default function Home() {
  return (
    <div className="hero max-h-screen bg-base-200">
      <div className="hero-content flex-wrap lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">ReVint</h1>
          <p className="py-6">
            Inicio de sesión
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
              <button className="btn btn-primary">Iniciar Sesion</button>
              <button className="btn btn-terciary">No tienes una cuenta?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

