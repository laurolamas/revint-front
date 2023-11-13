/* "use client";

import Card from "../components/favCards";
import { useState, useEffect } from "react";

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

    const deleteFavourite = (product_id) => {
        const copy = [...products];
        const filteredProducts = copy.filter((product) => product._id !== product_id);
        setProducts(filteredProducts);
        console.log(filteredProducts);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {products.map((product) => (
                    <Card product={product} key={product._id} deleteFavourite={deleteFavourite} />
                ))}
            </div>
        </>
    );
}

*/

"use client";

import Card from "../components/card";
import { useState, useEffect } from "react";

const products = [
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
];

export default function Product() {
    const [startIndex, setStartIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const cardsPerPage = 3;
  
    const handlePrevClick = () => {
      setStartIndex((prev) => Math.max(0, prev - cardsPerPage));
    };
  
    const handleNextClick = () => {
      setStartIndex((prev) => Math.min(products.length - cardsPerPage, prev + cardsPerPage));
    };
  
    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
  
    return (
      <>
            <div className="flex items-center justify-center max-h-screen bg-cover bg-center" style={{ backgroundImage: "url(/miera_5-4-2.jpg)" }}>
          <button
            onClick={handlePrevClick}
            className="bg-blue-700 text-white py-2 px-4 rounded-l-full transition duration-300 ease-in-out hover:bg-orange-800 focus:outline-none focus:shadow-outline-orange active:bg-orange-900"
          >
            &lt;
          </button>
          <div className="flex overflow-x-auto">
            {products.slice(startIndex, startIndex + cardsPerPage).map((product, index) => (
              <div
                key={product.id}
                className={`transition-opacity ${
                  hoveredIndex !== null && index !== hoveredIndex ? "opacity-50" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Card product={product} />
              </div>
            ))}
          </div>
          <button
            onClick={handleNextClick}
            className="bg-blue-700 text-white py-2 px-4 rounded-r-full transition duration-300 ease-in-out hover:bg-orange-800 focus:outline-none focus:shadow-outline-orange active:bg-orange-900"
          >
            &gt;
          </button>
        </div>
      </>
    );
  }