"use client";

import Card from "./components/card";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import WordTransition from "./components/styleTitle";
import Image from "next/image";
import productImage from '../public/produt.png';
import favoriteCard from '../public/favorite-card.png'

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
      <div className='h-screen v-screen items-auto relative'>
          
        { /*  */}
        <div className="ml-4 md:ml-96 mt-16 md:mt-64 absolute items-center justify-center text-center">
          <Typography variant='h1' className="text-4xl md:text-9xl">
            <WordTransition />
          </Typography>
          <Typography variant="h3" className="mt-4 text-lg md:text-2xl lg:text-3xl">
            Our <span className="text-yellow-500">&nbsp;style</span>, our <span className="text-green-500">&nbsp;planet</span>, our future
          </Typography>
        </div>

        <div className="relative bg-cover bg-full h-full flex items-center">
          <video className="relative inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            style={{ opacity: 0.6 }}
          ><source src="/cloth.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div className="bg-cover bg-full h-full flex items-center rounded" style={{ backgroundImage: 'url(/4.jpg)' }}>
          <div className="bg-cover bg-left w-2/4 h-full bg-black/25">
            <div className="bg-vintage-pattern text-white p-8">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-left md:w-/4">
                    <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl mt-16 drop-shadow-2xl" >
                      ReVint Vintage Clothing
                    </Typography>
                    <Typography variant="lead" color="white" className="mb-12 opacity-80 drop-shadow-2xl mt-4" >
                      ReVint Vintage is the best place to recirculate vintage fashion. We want our users to buy and re-sell their quality clothes while contributing to the environment.</Typography>
                    {/* Carrusel}
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
        <div className="bg-black rounded">
        <div class=" mx-auto md:px-6">
            <section class="mb-32 text-center">
              <h2 class="mb-20 text-3xl font-bold">Features</h2>
              <div class="grid lg:grid-cols-3 lg:gap-x-12">
                <div class="mb-12 lg:mb-0">
                  <div
                    class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="flex justify-center">
                      <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                        <svg xmlns="htp://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" class="h-7 w-7 mt-8">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                      </div>
                    </div>
                    <div class="p-6">
                      <h5 class="mb-4 text-lg font-semibold">Create your own products</h5>
                      <p>
                        Create your products and publish them never been so easy, follow certain parameters and look for potential costumers. 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 lg:mb-0">
                  <div
                    class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="flex justify-center">
                      <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" class="h-7 w-7 mt-8">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      </div>
                    </div>
                    <div class="p-6">
                      <h5 class="mb-4 text-lg font-semibold">Like products that you like</h5>
                      <p>
                        Create your own lists of favorites by liking products, then visit them whenever you want!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="">
                  <div
                    class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="flex justify-center">
                      <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="2"
                          stroke="currentColor" class="h-7 w-7 mt-8">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                      </div>
                    </div>
                    <div class="p-6">
                      <h5 class="mb-4 text-lg font-semibold">Contact the seller</h5>
                      <p>
                        Want to buy a product? Contact the seller to know more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <div className="bg-cover bg-full h-full flex items-center justify-center" style={{ backgroundImage: 'url(/ppl.jpg)' }}>
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
        </div> */}
        <div className="h-full bg-cover flex-items-center justify-center" style={{ backgroundImage: 'url(/recycle.jpg)' }}>
          <div className="h-full w-full bg-black/50">
            <div className="relative">
              <div className="absolute grid place-items-end">
                <div className=" text-right md:w-1/4 pr-8">
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
        <div className="bg-black h-full">
          <Typography variant="h1" color="white" className="flex items-center justify-center">
            Our team
          </Typography>
          <div className="w-full justify-evenly flex mt-20">
            <div className="card w-96 bg-gray-500 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./d.jpg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <Typography variant="h3" color="white" className="flex items-center justify-center">
                  Ignacio Llanes / Front-End Developer
                </Typography>
              </div>
            </div>
            <div className="card w-96 bg-gray-700 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./a.jpeg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <Typography variant="h3" color="white" className="flex items-center justify-center">
                  Back-End Developer / Project Manager
                </Typography>
              </div>
            </div>
            <div className="card w-96 bg-gray-500 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./b.jpeg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <Typography variant="h3" color="white" className="flex items-center justify-center">
                  Alejandro Rivello / Front-End Developer
                </Typography>
              </div>
            </div>
            <div className="card w-96 bg-gray-900 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./c.jpeg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <Typography variant="h3" color="white" className="flex items-center justify-center">
                  Lauro Lamas / Full-Stack Developer
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-black h-1/2 w-full flex-col'>
          <div className="h-1/2 items-center ">
            <Typography variant="h1" color="white" className="flex items-center justify-center">
              About us
            </Typography>
            <Typography variant="h3" className="mt-20 items-center justify-center ml-32 mr-32">We are software development students who been motivated by the non-existent or non-functional online vintage stores in Uruguay. Our mindset is letting users to feel free by selling their products, the goal is connect those users with people who would want to buy them.</Typography>
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
