"use client";

import Card from "./components/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();

    const res2 = await fetch(`http://localhost:8080/users/profile`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const profileData = await res2.json();
    setProducts(data);
    setFavorites(profileData.favProducts);
    console.log(profileData.favProducts);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Card product={product} key={product._id} isFavorite={(favorites.includes(product._id))} favorites={favorites} setFavorites={setFavorites} />
        ))}
      </div>
    </div>
  );
}
