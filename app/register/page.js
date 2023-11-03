"use client";
import Link from "next/link";

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const username = event.target[1].value;
    const email = event.target[2].value;
    const phoneNumber = event.target[3].value;
    const city = event.target[4].value;
    const password = event.target[5].value;
    const password2 = event.target[6].value;
    const profileImage = event.target[7].files[0];

    if (password !== password2) {
      return alert("Passwords do not match");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("city", city);
    formData.append("password", password);
    formData.append("profileImage", profileImage);

    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (res.ok) {
      window.location.href = "/";
    } else {
      const errorData = await res.json();
      const errorMessages = errorData.errors.map((error) => error.msg);
      alert(errorMessages.join("\n"));
    }
  };

  return (
    <div className="hero max-h-screen bg-base-200">
      <div className="hero-content flex-wrap lg:flex-row">
        {/* Titles */}
        <div>
          <h1 className="text-5xl font-bold">ReVint</h1>
          <p className="mt-5">User registration</p>
        </div>
        {/* Form */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="user"
                placeholder="username"
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
                <span className="label-text">Phone Number</span>
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
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
              <Link href="/login" className="mt-5">
                <button className="btn btn-terciary">
                  Already have an account?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
