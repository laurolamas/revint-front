"use client";
import { useEffect, useState } from "react";
import Modal from "../components/modal";
import UploadProductForm from "../components/uploadProductForm";
import Image from "next/image";

function displayProducts(products) {
  if (products.length > 0) {
    return (
      <div className=" h-full w-full mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mb-5">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product._id}
              href={`/product/${product._id}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                {product.sold && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-500/50">
                    <p className="text-center font-extrabold text-3xl text-yellow-300">
                      SOLD
                    </p>
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-sm text-gray-100">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-300">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="border-4 rounded-3xl border-slate-50 border-dashed p-10 flex flex-col gap-5 items-center m-10">
        <Image
          src="/empty-shirt.svg"
          width={50}
          height={50}
          alt="empty-shirt"
        />
        <h3 className="text-lg font-bold">It's a bit lonely around here...</h3>

        <p>Get started by creating your first product</p>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal-5").showModal()}
        >
          {" "}
          Create{" "}
        </button>
        <Modal id="my_modal-5" title="Create a product">
          <UploadProductForm mode={"create"} />
        </Modal>
      </div>
    );
  }
}

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
        {/* <UserProducts userProducts={userProducts} /> */}
        {displayProducts(userProducts)}
      </div>
    )
  );
}
