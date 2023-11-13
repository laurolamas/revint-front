"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
  const [product, setProduct] = useState(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState(undefined);

  const handleNextSlide = () => {
    if (currentSlide == product.images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(product.images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const fetchInfo = async () => {
    const res = await fetch(
      `http://localhost:8080/products/${params.productid}`
    );
    const product = await res.json();
    setProduct(product);
    console.log(product);

    const res2 = await fetch(`http://localhost:8080/users/${product.user_id}`);
    const user = await res2.json();
    setUser(user);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const isUserDefined = user !== undefined;

  return (
    product && (
      <>
        <div className="flex flex-row justify-evenly m-10">
          <div className="h-96 w-96 rounded-lg bg-gray-200 flex flex-col justify-center relative">
            <img
              src={product.images[currentSlide]}
              alt={`image-${currentSlide}`}
              className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-between">
              <button
                className="btn btn-circle relative left-5"
                onClick={handlePrevSlide}
              >
                ❮
              </button>
              <button
                className="btn btn-circle relative right-5"
                onClick={handleNextSlide}
              >
                ❯
              </button>
            </div>
          </div>
          <div className="items-center">
            <h1 className="text-4xl">{product.name}</h1>
            <h2 className="text-2xl">{product.price}</h2>
            <p className="text-xl">{product.description}</p>
            <p className="text-xl">{product.category}</p>
            <p className="text-xl">{product.condition}</p>

            {isUserDefined && (
              <div className="flex flex-col items-center mt-5">
                <h1>Published by: </h1>
                <div className="flex flex-row">
                  <Link href={`/profile/${user.username}`}>
                    <div className="avatar m-5 flex flex-col">
                      <div className="w-24 rounded-full">
                        <img src={user.imageUrl || "/user.png"} />
                      </div>
                      <p className="text-slate-400 text-center">
                        @{user.username}
                      </p>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-center">
                    <p className="text-xl">👤{user.name}</p>
                    <p className="text-xl">📍{user.city}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
}
