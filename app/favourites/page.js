"use client";


import Card from "../components/favCards";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [userInfo, setUserInfo] = useState({});
  const [favProducts, setfavProducts] = useState([]);

  const fetchUserInfo = async () => {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/users/profile`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const profileData = await res.json();

    setUserInfo(profileData);
    return profileData.favProducts;
  };

  const fetchFavourites = async (productList) => {
    const favProductsList = [];

    for (let i = 0; i < productList.length; i++) {
      const res = await fetch(
        `http://localhost:8080/products/${productList[i]}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const product = await res.json();
      favProductsList.push(product);
    }
    setfavProducts(favProductsList);
  };

  const initialLoad = async () => {
    const productsList = await fetchUserInfo();
    await fetchFavourites(productsList);
  };

  const deleteFavourite = async (product_id) => {
    const copy = [...favProducts];
    const filteredProducts = copy.filter((product) => {
      return product._id !== product_id;
    });
    setfavProducts(filteredProducts);

    const res = await fetch(`http://localhost:8080/users/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        favProducts: filteredProducts.map((product) => product._id),
      }),
    });
    console.log(await res.json());
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <>
      {(favProducts.length !== 0) && (
        <div className="flex flex-col justify-center items-center">
          {favProducts.map((product) => (
            <Card
              product={product}
              key={product._id}
              deleteFavourite={deleteFavourite}
            />
          ))}
        </div>
      )}
      {(favProducts.length === 0) && (
        <div className="border-4 rounded-3xl border-slate-50 border-dashed p-10 flex flex-col gap-5 items-center m-10">
          <Image
            src="/empty-shirt.svg"
            width={50}
            height={50}
            alt="empty-shirt"
          />
          <h3 className="text-lg font-bold">It's a bit lonely around here...</h3>
          <p>Get started by liking your first product</p>
          <Link href={"/"}>
            <button className="btn">
              Browse
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
