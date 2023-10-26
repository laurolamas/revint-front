"use client";

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
        const filteredProducts = copy.filter((product) => {
            return product._id !== product_id
        });
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