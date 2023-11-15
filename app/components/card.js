"use client";
import Link from "next/link";

export default function Card({ product, isFavorite, favorites, setFavorites }) {

  const addToFavorites = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const res = await fetch(`http://localhost:8080/users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ favProducts: [...favorites, product._id] }),
    });
    setFavorites([...favorites, product._id]);
  }

  const removeFromFavorites = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const res = await fetch(`http://localhost:8080/users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ favProducts: favorites.filter(fav => fav !== product._id) }),
    });
    setFavorites(favorites.filter(fav => fav !== product._id));
  }


  return (
    <Link
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
              onClick={(e) => { isFavorite ? removeFromFavorites(e) : addToFavorites(e) }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-500'}`}
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
    </Link>
  );
}
