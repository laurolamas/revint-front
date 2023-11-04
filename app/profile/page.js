"use client";
import { useEffect, useState } from "react";
import Card from "../components/card";
import Image from "next/image";
import UploadProductForm from "../components/uploadProductForm";

export default function ProfilePage() {
  const [userProducts, setUserProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
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

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  return (
    profileData && (<div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">Profile Page</h1>
      <div className="gap-5">
        <h2>User Info</h2>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={profileData.imageUrl || "/user.png"} />
          </div>
        </div>
        <p>{profileData.name}</p>
        <p>{profileData.email}</p>

      </div>
      <div>
        <h2>Products</h2>
        <div className="flex flex-row flex-wrap justify-center">
          {showModal && (
            <UploadProductForm
              mode={"edit"}
              handleEdit={handleEdit}
              product={currentProduct}
            />
          )}
          {userProducts.map((product) => (
            <Card
              product={product}
              key={product._id}
              mode={"profile"}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>)
  );
}
