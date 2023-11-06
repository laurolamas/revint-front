"use client";
import { useEffect, useState } from "react";
import UserProducts from "../components/userProducts";

export default function ProfilePage() {
  const [userProducts, setUserProducts] = useState([]);
  const [profileData, setProfileData] = useState(undefined);

  const fetchInfo = async () => {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/users/profile`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const profileData = await res.json();

    const userProducts = await fetch(
      `http://localhost:8080/products/user/${profileData._id}`
    )
      .then((res) => res.json())
      .catch((err) => []);

    setProfileData(profileData);
    setUserProducts(userProducts);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    profileData && (<div className="flex flex-col items-center">
      <div className="flex flex-row">
        <div className="avatar m-5 flex flex-col">
          <div className="w-24 rounded-full">
            <img src={profileData.imageUrl || "/user.png"} />
          </div>
          <p className="text-slate-400 text-center">@{profileData.username}</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xl">👤{profileData.name}</p>
          <p className="text-xl">📍{profileData.city}</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row flex-wrap justify-center">
          <UserProducts userProducts={userProducts} />
        </div>
      </div>
    </div>)
  );
}
