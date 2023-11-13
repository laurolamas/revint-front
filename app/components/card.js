"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card({ product, mode, handleEdit }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide === product.images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(product.images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleEditProduct = () => {
    handleEdit(product);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  };


  return (
    <div className="group card w-96 bg-base-100 shadow-xl m-10 hover:cursor-pointer hover:shadow-inner transform hover:scale-110 transition ease-out relative">
      <div className="carousel w-full relative">
        <div className="carousel-item relative w-full">
          <Image
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
            src={product.images[currentSlide]}
            alt={`image-${currentSlide}`}
            height={10000}
            width={10000}
            className="h-full w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="btn btn-circle" onClick={handlePrevSlide}>
              ❮
            </button>
            <button className="btn btn-circle" onClick={handleNextSlide}>
              ❯
            </button>
          </div>
        </div>
      </div>
      <div className="card-body group-hover:bg-zinc-60043">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">{`$${product.price}`}</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-between items-end">
          {mode !== "profile" && (
            <button className="btn btn-circle" onClick={handleAddToFavorites}>
              <svg
                className="w-6 h-6 stroke-current text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          )}

          <div className="badge badge-outline">{product.category}</div>
          <Link href={`/product-detail/${product.id}`}>
            <button className="btn btn-primary">Buy
            </button>
          </Link>
          {mode === "profile" && (
            <button className="btn btn-circle" onClick={handleEditProduct}>
              <svg
                className="w-6 h-6 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
