"use client";
import Image from "next/image";
import { useState } from "react";
import UploadProductForm from "./uploadProductForm";
import Modal from "./modal";

export default function Card({ product, mode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  const handleEditProduct = () => {};

  // return (
  //   <div className="group card w-96 bg-base-100 shadow-xl sm:m-10 hover:cursor-pointer">
  //     <div className="carousel w-full">
  //       <div className="carousel-item relative w-full">
  //         <Image
  //           style={{
  //             borderTopLeftRadius: "1rem",
  //             borderTopRightRadius: "1rem",
  //           }}
  //           src={product.images[currentSlide]}
  //           alt="image-0
  //             "
  //           height={10000}
  //           width={10000}
  //           className="h-96 w-96"
  //         />
  //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  //           <button className="btn btn-circle" onClick={handlePrevSlide}>
  //             ❮
  //           </button>
  //           <button className="btn btn-circle" onClick={handleNextSlide}>
  //             ❯
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="card-body group-hover:bg-zinc-60043">
  //       <h2 className="card-title">
  //         {product.name}
  //         <div className="badge badge-secondary">{`$${product.price}`}</div>
  //       </h2>
  //       <p>{product.description}</p>
  //       <div className="card-actions justify-end">
  //         <div className="badge badge-outline">{product.category}</div>
  //         {mode == "profile" && (
  //           <button
  //             className="btn btn-circle"
  //             onClick={() => {
  //               document.getElementById(product._id).showModal();
  //             }}
  //           >
  //             <svg
  //               className="w-6 h-6 stroke-current"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 fillRule="evenodd"
  //                 clipRule="evenodd"
  //                 d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
  //                 fill="#000000"
  //               />
  //             </svg>
  //           </button>
  //         )}
  //       </div>
  //     </div>
  //     <Modal id={product._id}>
  //       <UploadProductForm mode={"edit"} product={product} />
  //     </Modal>
  //   </div>
  // );

  return (
    <a
      key={product._id}
      href={`/product/${product._id}`}
      className="group w-full"
    >
      <div className="aspect-h-1 aspect-w-1 w-full relative overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {product.sold && (
            <div className="absolute bottom-0 left-0 px-4 py-4 bg-gray-500/50">
              <p className="text-center font-extrabold text-3xl text-yellow-300">
                SOLD
              </p>
            </div>
          )}
          <div className="absolute bottom-0 right-0 px-3 py-2">
            <button
              className="btn btn-ghost btn-circle"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                alert("TODO: Add to favorites");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <h3 className="mt-4 text-sm text-gray-100">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-300">{product.price}</p>
    </a>
  );
}
