"use client";
import Image from "next/image";
import { useState } from "react";

export default function Card({ product }) {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <div className="group card w-96 bg-base-100 shadow-xl m-10 hover:cursor-pointer hover:shadow-inner transform hover:scale-110 transition ease-out">
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">
          <Image
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
            src={product.images[currentSlide]}
            alt="image-0
              "
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
        </div>
      </div>
    </div>
  );
}
