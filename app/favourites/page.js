"use client";

import Card from "../components/favCards";
import { useState, useEffect } from "react";

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
            const res = await fetch(`http://localhost:8080/products/${productList[i]}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            const product = await res.json();
            favProductsList.push(product);
        }
        setfavProducts(favProductsList);
    }

    const initialLoad = async () => {
        const productsList = await fetchUserInfo();
        await fetchFavourites(productsList);
    }

    const deleteFavourite = async (product_id) => {
        const copy = [...favProducts];
        const filteredProducts = copy.filter((product) => {
            return product._id !== product_id
        });
        setfavProducts(filteredProducts);

        const res = await fetch(`http://localhost:8080/users/`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ favProducts: filteredProducts.map((product) => product._id) }),
        });
        console.log(await res.json());
    }

    useEffect(() => {
        initialLoad();
    }, []);


    return (
        <>
            <div>HOLA</div>
            <div className="flex flex-col justify-center items-center">
                {favProducts.map((product) => (
                    <Card product={product} key={product._id} deleteFavourite={deleteFavourite} />
                ))}
            </div>
        </>
    );
}