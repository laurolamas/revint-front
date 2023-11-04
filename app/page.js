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

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {products.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}
