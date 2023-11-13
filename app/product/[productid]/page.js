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
        <div className="max-w-96">
          <img
            src={product.images[currentSlide]}
            alt="image-0"
            className="max-h-96"
          />
          <div className=" relative flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="btn btn-circle" onClick={handlePrevSlide}>
              ❮
            </button>
            <button className="btn btn-circle" onClick={handleNextSlide}>
              ❯
            </button>
          </div>
        </div>
        <h1>Created by: </h1>
        {isUserDefined && (
          <Link href={`/profile/${user.username}`}>
            <p>{user.username}</p>
          </Link>
        )}
      </>
    )
  );
}
