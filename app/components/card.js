"use client";
import Image from "next/image";
import { useState } from "react";
import UploadProductForm from "./uploadProductForm";
import Modal from "./modal";

export default function Card({ product, mode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  const handleEditProduct = () => { };

  const handleDeleteProduct = () => {
    fetch(`http://localhost:8080/products/${product._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      } else {
        alert("Something went wrong");
      }
    });
  };

  return (
    <div className="group card w-96 bg-base-100 shadow-xl m-10 hover:cursor-pointer hover:shadow-inner transform hover:scale-110 transition ease-out relative">
      <button
        className="btn btn-circle absolute bottom-3 left-3"
        onClick={() => {
          handleDeleteProduct();
        }}
      >
        <img
          src="/bin.png"
          alt="Delete"
          width="20"
        />
      </button>
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">
          <Image
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
            src={product.images[currentSlide]}
            alt="image-0"
            height={10000}
            width={10000}
            className="h-96 w-96"
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
          {mode === "profile" && (
            <button
              className="btn btn-circle"
              onClick={() => {
                document.getElementById(product._id).showModal();
              }}
            >
              {/* Your existing SVG code */}
            </button>
          )}
        </div>
      </div>
      <Modal id={product._id}>
        <UploadProductForm mode={"edit"} product={product} />
      </Modal>
    </div>
  );
}
