import Image from "next/image";

export default function FavCards({ product, deleteFavourite }) {
  const handleDelete = (e) => {
    deleteFavourite(product._id);
  };

  return (
    <div className="bg-slate-400 p-5 gap-20 flex flex-row justify-between items-center m-3">
      <Image
        src={product.images[0]}
        width={100}
        height={100}
        alt="Favcard image"
        className="h-auto aspect-auto rounded-sm"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold uppercase bg-transparent border-none text-white">
          {product.name}
        </h3>
        <p className="bg-transparent border-none text-white">
          {product.description}
        </p>
        <p className="font-semibold bg-transparent border-none text-white">
          ${product.price}
        </p>
      </div>
      <button
        className="btn btn-outline btn-secondary border-none ml-1"
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
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
  );
}
