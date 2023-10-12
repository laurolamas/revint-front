"use client";

import Card from "./components/card";
import { useState, useEffect } from "react";

/* const products = [
  {
    id: 1,
    name: "Campera",
    description: "Impecable, muy poco uso",
    images: [
      "/test-image.jpg",
      "https://storagerevint.blob.core.windows.net/images/image1697055983147.jpg",
    ],
    price: 100,
    tags: ["fashion", "jacket", "outerwear"],
  },
  {
    id: 2,
    name: "Denim Jeans",
    description: "Classic blue jeans, perfect for any occasion",
    images: [
      "/test-image.jpg",
      "https://storagerevint.blob.core.windows.net/images/image1697055983147.jpg",
    ],
    price: 50,
    tags: ["fashion", "jeans", "bottoms"],
  },
  {
    id: 3,
    name: "Striped T-Shirt",
    description: "Comfortable and stylish striped t-shirt",
    images: [
      "/test-image.jpg",
      "https://storagerevint.blob.core.windows.net/images/image1697055983147.jpg",
    ],
    price: 25,
    tags: ["fashion", "t-shirt", "tops"],
  },
  {
    id: 4,
    name: "Summer Dress",
    description: "Flowy and elegant dress for summer days",
    images: ["/test-image.jpg", "/test-image.jpg"],
    price: 60,
    tags: ["fashion", "dress", "summer"],
  },
  {
    id: 5,
    name: "Leather Jacket",
    description: "Stylish black leather jacket for a cool look",
    images: ["/test-image.jpg", "/test-image.jpg"],
    price: 120,
    tags: ["fashion", "jacket", "outerwear"],
  },
  {
    id: 6,
    name: "Hoodie",
    description: "Warm and comfortable hoodie for casual days",
    images: ["/test-image.jpg", "/test-image.jpg"],
    price: 40,
    tags: ["fashion", "hoodie", "outerwear"],
  },
  {
    id: 7,
    name: "Sneakers",
    description: "Sporty sneakers for an active lifestyle",
    images: ["/test-image.jpg", "/test-image.jpg"],
    price: 70,
    tags: ["fashion", "footwear", "sports"],
  },
  {
    id: 8,
    name: "Beanie",
    description: "Cozy beanie to keep you warm in the winter",
    images: ["/test-image.jpg", "/test-image.jpg"],
    price: 15,
    tags: ["fashion", "accessories", "winter"],
  },
  {
    id: 9,
    name: "Plaid Shirt",
    description: "Classic plaid shirt for a timeless look",
    images: ["/test-image.jpg", "/test-image.jpg"],
    price: 35,
    tags: ["fashion", "shirt", "tops"],
  },
  {
    id: 10,
    name: "Sunglasses",
    description: "Stylish sunglasses to complete your outfit",
    images: ["/test-image.jpg", "/test-image.jpg"],
    price: 20,
    tags: ["fashion", "accessories", "summer"],
  },
]; */

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // fetch including cors header
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    setProducts(data);
    console.log(data);
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
