"use client";

import Card from "./components/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // return (
  //   <>
  //     <div className="flex flex-row flex-wrap justify-center">
  //       {products.map((product) => (
  //         <Card product={product} key={product._id} />
  //       ))}
  //     </div>
  //   </>
  // );

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          // TODO: check if product id is in the list of favorites and pass it to the card as a prop
          // TODO: first we have to fetch the list of favorites from the backend
          <Card product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
