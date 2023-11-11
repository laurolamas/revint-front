"use client";
import UserProducts from "./../../components/userProducts";
import { useEffect, useState } from "react";
export default function Page({ params }) {
  const [userProducts, setUserProducts] = useState([]);
  const [profileData, setProfileData] = useState(undefined);

  const fetchInfo = async () => {
    // Fetch data from external API
    const res = await fetch(
      `http://localhost:8080/users/profile/${params.username}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const profileData = await res.json();
    console.log(profileData);

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
    profileData && (
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <div className="avatar m-5 flex flex-col">
            <div className="w-24 rounded-full">
              <img src={profileData.imageUrl || "/user.png"} />
            </div>
            <p className="text-slate-400 text-center">
              @{profileData.username}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl">👤{profileData.name}</p>
            <p className="text-xl">📍{profileData.city}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row flex-wrap justify-center">
            {/* <UserProducts userProducts={userProducts} /> */}
          </div>
        </div>
      </div>
    )
  );
}
