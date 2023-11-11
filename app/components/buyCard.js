"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BuyCard({ product, mode, handleEdit, seller }) {
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

  return (
    <div className="flex space-x-4">
      {/* Tarjeta de Compra */}
      <div className="group card w-96 bg-base-100 shadow-xl m-10 hover:cursor-pointer hover:shadow-inner transform hover:scale-110 transition ease-out relative">
        {/* Carousel Section */}
        <div className="carousel w-full relative">
          <div className="carousel-item relative w-full">
            <Image
              src={product.images[currentSlide]}
              alt={`image-${currentSlide}`}
              height={200}
              width={300}
              className="object-cover w-full h-full rounded-t-md"
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

        {/* Card Body */}
        <div className="card-body group-hover:bg-zinc-60043">
          <div className="flex justify-between">
            {/* Product Price and Category */}
            <div>
              <h2 className="card-title">
                {product.name}
                <div className="badge badge-secondary">{`$${product.price}`}</div>
              </h2>
            </div>
          </div>

          {/* Product Description and Actions */}
          <p>{product.description}</p>
          <div className="card-actions justify-between items-end">
            <div className="badge badge-outline">{product.category}</div>
            <Link href={`/product-detail/${product.id}`}>
              <button className="btn btn-secondary btn-sm">Send Message to Seller</button>
            </Link>
            {mode === "profile" && (
              <button className="btn btn-circle" onClick={handleEditProduct}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tarjeta del Vendedor */}
      <div className="w-96 bg-base-100 shadow-xl m-10">
        {/* Agrega la información del vendedor aquí */}
      </div>
    </div>
  );
}
