"use client";

import { useRef } from "react";
import Card from "./components/card";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import WordTransition from "./components/styleTitle";
import Image from "next/image";
import { images } from "@/next.config";
import LauroSVG from '../public/LAURO.png';
import AleSVG from '../public/ALE.png';
import NachoSVG from '../public/NACHO.png';
import KundiSVG from '../public/KUNDI.png';

export default function Home() {
  const [products, setProducts] = useState([]);
  const videoRef = useRef(null);
  const [startIndex] = useState(0);
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
            style={{ opacity: 0.7 }}
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
        <div className="h-1/2 flex-row " style={{ backgroundImage: 'url(/jean.png)'}}>
        <div class=" mx-auto md:px-6">
            <section class="mb-32 text-center">
              <h2 class="mb-20 text-3xl font-bold">Features</h2>
              <div class="grid lg:grid-cols-3 lg:gap-x-12">
                <div class="mb-12 lg:mb-0">
                  <div
                    class="block h-full rounded-xl bg-black/75">
                    <div class="flex justify-center">
                      <div class="-mt-8 inline-block rounded-full bg-white p-4 text-primary shadow-md">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8"><path fill="#000000" d="M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z" />
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
                    class="block h-full rounded-xl bg-black/75">
                    <div class="flex justify-center">
                      <div class="-mt-8 inline-block rounded-full p-4 text-primary bg-white shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="" stroke-width="1"
                          stroke="currentColor" class="h-7 w-8">
                          <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z" fill="#000000"></path>
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
                    class="block h-full rounded-xl bg-black/75">
                    <div class="flex justify-center">
                      <div class="-mt-8 inline-block rounded-full bg-white  p-4 text-primary shadow-md">
                        <svg viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="h-9 w-9"><path d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z" /></svg>
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
        <div className="bg-black h-full bg-cover bg-center bg-black opacity-80" style={{backgroundImage: 'url(/lana2.jpg)'}}>
          <Typography variant="h1" color="white" className="flex items-center justify-center">
            Our team
          </Typography>
          <div className="w-full justify-evenly flex mt-20">
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./d.jpg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <Typography variant="h3" color="black" className="flex items-center justify-center">
                  Ignacio Llanes / Front-End Developer
                </Typography>
                <Image src={NachoSVG} alt="Nacho QR" width={200} height={200} />
              </div>
            </div>
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./a.jpeg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <Typography variant="h3" color="white" className="flex items-center justify-center">
                  Facundo Machado Back-End Developer / Project Manager
                </Typography>
                <Image src={KundiSVG} alt="Facundo SVG" width={200} height={200}/>
              </div>
            </div>
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./b.jpeg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center" style={images}>
                <Typography variant="h3" color="white" className="flex items-center justify-center">
                  Alejandro Rivello / Front-End Developer
                </Typography>
                <Image src={AleSVG} alt="Ale SVG" width={200} height={200}/>
              </div>
            </div>
            <div className="card w-96 bg-transparent shadow-xl">
              <figure className="px-10 pt-10">
                <img src="./c.jpeg" alt="foto" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <Typography variant="h3" color="white" className="flex items-center justify-center">
                  Lauro Lamas / Full-Stack Developer
                </Typography>
                <Image src={LauroSVG} alt="Lauro QR" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-black h-1/2 w-full flex-col mt-16'>
          <div className="h-1/2 items-center mt-32">
            <Typography variant="h1" color="white" className="flex items-center justify-center mb-0">
              About us
            </Typography>
            <Typography variant="h3" className="mt-20 items-center justify-center text-center mt-16 text-center">We are software development students who been motivated by the non-existent or non-functional online vintage stores in Uruguay. Our mindset is letting users to feel free by selling their products, the goal is connect those users with people who would want to buy them.</Typography>
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
