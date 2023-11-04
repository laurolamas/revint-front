import Link from 'next/link';

export default function Home() {
    return (
      <div className="hero max-h-screen bg-base-200">
        <div className="hero-content flex-wrap lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">ReVint</h1>
            <p className="mt-5">
              User registration panel
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="user"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">User name</span>
                </label>
                <input
                  type="user"
                  placeholder="user name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Phone number</span>
                </label>
                <input
                  type="tel"
                  placeholder="phone number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  placeholder="city"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Re-enter password</span>
                </label>
                <input
                  type="password"
                  placeholder="re-enter password"
                  className="input input-bordered"
                  required
                /> 
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <Link href="/login">
                <button className="relative bottom-0 btn btn-accent btn-outline mt-3">Already have an account?</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  