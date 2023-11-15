"use client";
import { useEffect, useState } from "react";
import Card from "../components/card";
import Image from "next/image";
import UploadProductForm from "../components/uploadProductForm";

export default function ProfilePage() {
  const [userProducts, setUserProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [profileData, setProfileData] = useState({});
  const testUserId = "652491720504dbe29f7cba54";

  const fetchInfo = async () => {
    // Fetch data from external API
    const profileData = await fetch(
      `http://localhost:5000/users/${testUserId}`
    ).then((res) => res.json());

    const userProducts = await fetch(
      `http://localhost:5000/products/user/${testUserId}`
    ).then((res) => res.json());

    console.log(profileData, userProducts);
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
    <div className="mt-32 bg-cover bg-center" style={{backgroundImage: "url(/walkin.jpeg)" }}>
      <h1>Profile Page</h1>
      <h2>User Info</h2>
      <p>{profileData.name}</p>
      <p>{profileData.email}</p>
      <Image
        src={profileData.imageUrl || "/user.png"}
        className="w-40 h-40"
        width={100}
        height={100}
        alt="profile picture"
      />

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
  );
}
