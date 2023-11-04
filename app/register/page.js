"use client";
import Link from "next/link";

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (event.target.password.value !== event.target.password2.value) {
      return alert("Passwords do not match");
    }

    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("username", event.target.username.value);
    formData.append("password", event.target.password.value);
    formData.append("email", event.target.email.value);
    formData.append("phoneNumber", event.target.phoneNumber.value);
    formData.append("city", event.target.city.value);
    formData.append("profileImage", event.target.profileImage.files[0]);


    const res = await fetch("http://localhost:8080/auth/register", {
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

  const labelClasses = "input input-bordered placeholder-gray-600";

  return (
    <div className="bg-base-200 flex flex-col flex-wrap items-center p-10">
      {/* Titles */}
      <div className="p-2">
        <h1 className="text-5xl font-bold">ReVint</h1>
        <p className="mt-5">User registration</p>
      </div>
      {/* Form */}
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 text-center">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className=" md:grid md:grid-cols-2 md:gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={labelClasses}
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="user"
                placeholder="johndoe123"
                className={labelClasses}
                required
                name="username"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="john123doe"
                className={labelClasses}
                required
                name="password"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="john123doe"
                className={labelClasses}
                required
                name="password2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="johndoe@email.com"
                className={labelClasses}
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="+12345678"
                className={labelClasses}
                required
                name="phoneNumber"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="Montevideo"
                className={labelClasses}
                required
                name="city"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className={`${labelClasses} p-2`}
                required
                name="profileImage"
              />
            </div>
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
  );
}
