"use client";

import Card from "../components/buyCard";
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

export default function ProductDetail() {
    const [startIndex, setStartIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const cardsPerPage = 1;

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div className="flex items-center justify-center max-h-screen bg-cover bg-center  mt-24" style={{ backgroundImage: "url(/miera_5-4-2.jpg)" }}>
                <div className="flex overflow-x-auto">
                    {products.slice(startIndex, startIndex + cardsPerPage).map((product, index) => (
                        <div
                            key={product.id}
                            className={`transition-opacity ${hoveredIndex !== null && index !== hoveredIndex ? "opacity-50" : ""
                                }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}