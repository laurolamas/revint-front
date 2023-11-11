"use client";

import Card from "./components/card";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import WordTransition from "./components/styleTitle";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardsPerPage = 3;

  const showEnvironmentalInfo = () => {
    const alertMessage = `
      Recycling clothes helps reduce waste and minimize the environmental impact. Each year, a significant amount of clothing is discarded, contributing to landfills and environmental pollution. By recycling and reusing clothes, we can conserve resources, reduce energy consumption, and promote sustainable fashion practices. Make a positive impact on the environment by donating, repurposing, or responsibly disposing of your clothing.
    `;

    alert(alertMessage);
  };

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    setProducts(data);
  };

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - cardsPerPage));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => Math.min(products.length - cardsPerPage, prev + cardsPerPage));
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className='h-screen v-screen items-auto'>
        <div className="h-full flex items-center justify-center bg-black h-5/6">
          <Typography variant='h1' className="text-9xl">
            <WordTransition />
          </Typography>
        </div>
        <div className="bg-cover bg-full h-full flex items-center" style={{ backgroundImage: 'url(/miera_5-4-2.jpg)' }}>
          <div className="bg-cover bg-left w-2/4 h-full bg-black/25">
            <div className="bg-vintage-pattern text-white p-8">
              <div className="flex font-sans space-x-4">
                <Link href="/products">
                  <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">Store</button>
                </Link>
                <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">About us</button>
                <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">Contact</button>
              </div>
              <div className="relative h-full w-full">
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-left md:w-/4">
                    <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl mt-16 drop-shadow-2xl" >
                      ReVint Vintage Clothing
                    </Typography>
                    <Typography variant="lead" color="white" className="mb-12 opacity-80 drop-shadow-2xl text-xl" >
                      ReVint Vintage is the best place to recirculate vintage fashion. We want our users to buy and re-sell their quality clothes while contributing to the environment.</Typography>
                    {/* Carrusel */}
                    {/* botones de carrusel */}
                    <div className="flex items-center justify-center max-h-screen">
                      <button
                        onClick={handlePrevClick}
                        className="bg-blue-700 text-white py-2 px-4 rounded-l-full transition duration-300 ease-in-out hover:bg-orange-800 focus:outline-none focus:shadow-outline-orange active:bg-orange-900"
                      >
                        &lt;
                      </button>
                      <div className="flex overflow-x-auto">
                        {products.slice(startIndex, startIndex + cardsPerPage).map((product, index) => (
                          <div
                            key={product.id}
                            className={`transition-opacity ${hoveredIndex !== null && index !== hoveredIndex ? "opacity-50" : ""
                              }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Card product={product} />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={handleNextClick}
                        className="bg-blue-700 text-white py-2 px-4 rounded-r-full transition duration-300 ease-in-out hover:bg-orange-800 focus:outline-none focus:shadow-outline-orange active:bg-orange-900"
                      >
                        &gt;
                      </button>
                    </div>
                    {/* fin de botones de carrusel */}
                    {/* Fin del carrusel */}
                    <div className="flex justify-left gap-2">
                      <Link href="/products">
                        <Button className="text-sm btn btn-ghost text-white">Explore Gallery</Button>
                      </Link>
                    </div>
                  </div>

                </div>
                <div className="flex flex-row flex-wrap justify-center">
                  {products.slice(startIndex, startIndex + cardsPerPage).map((product, index) => (
                    <div
                      key={product.id}
                      className={`transition-opacity ${hoveredIndex !== null && index !== hoveredIndex ? "opacity-50" : ""
                        }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Card product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-full h-full flex items-center justify-center" style={{ backgroundImage: 'url(/ppl.jpg)' }}>
          <div className="grid h-full w-full bg-black/25">
            <div className="bg-cover bg-center w-3/4 md:w-1/2 lg:w-1/3 h-full mx-auto">
              <div className="bg-vintage-pattern text-white p-8 h-full flex flex-col justify-center">
                <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center">
                  Where Vintage Meets Modern
                </Typography>
                <Typography variant="lead" color="white" className="mb-12 opacity-80 drop-shadow-2xl text-xl text-center">
                  The best of both worlds, plus a sustainable approach. Try our customer's collection of vintage clothes with a modern twist.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link href="/products">
                    <Button className="text-sm btn btn-ghost text-white">Explore Gallery</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-full h-full w-full flex items-center justify-end" style={{ backgroundImage: 'url(/recycle.jpg)' }}>
          <div className="bg-cover bg-center w-1/2 h-full h-1/2 w-full bg-black/50">
            <div className="bg-vintage-pattern text-white p-8">
              <div className="rounded-xl">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 grid h-full w-full place-items-end bg-black/75">
                    <div className="w-3/4 text-right md:w-1/4 pr-8">
                      <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl mt-16">
                        Recycle Your Clothes
                      </Typography>
                      <Typography variant="lead" color="white" className="mb-12 opacity-80 drop-shadow-2xl text-xl">
                        We have to start thinking about the future of our planet. The fashion industry is one of the most polluting industries in the world. We want to help you recycle your clothes and give them a second life.
                      </Typography>
                      <div className="flex justify-center gap-2">
                        <Button className="text-sm btn btn-ghost text-white" onClick={showEnvironmentalInfo}>
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {products.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}
