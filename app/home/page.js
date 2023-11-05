"use client";

import React from 'react';
import Link from 'next/link';
import { Typography, Button } from "@material-tailwind/react";



export default function Home() {

    return (
        <div className='h-screen v-screen items-auto'>
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
                                        ReVint Vintage is the best place to recirculate vintage fashion. We want our users to buy and re-sell their quality clothes while contributing to the environment.                                        </Typography>
                                    <div className="flex justify-left gap-2">
                                        <Button size="lg" color="white" variant="text"> Explore </Button>
                                        <Button size="lg" color="white" variant="text"> Gallery </Button>
                                    </div>
                                </div>
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
                                <Button size="lg" color="white" variant="text">Explore</Button>
                                <Button size="lg" color="white" variant="text">Gallery</Button>
                            </div>
                            <div className="text-center mt-2">Press <kbd className="kbd kbd-sm">F</kbd> to pay respects.</div>
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
                                        <div className="flex justify-end gap-2">
                                            <Button size="lg" color="white" variant="text">Explore</Button>
                                            <Button size="lg" color="white" variant="text">Gallery</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-full h-full w-full flex flex-col items-center justify-center bg-white">
                <Typography variant="h1" color="black" className="text-black mb-4 text-3xl md:text-4xl lg:text-5xl mt-5">
                    Main features
                </Typography>
                <div className="bg-full h-full w-full flex flex-items-center p-8 justify-center">
                    <div className="bg-black p-8 text-white rounded-3xl m-4 w-1/2">
                        <Typography variant="h1" className="text-white flex justify-center">
                            Create your own products
                        </Typography>
                        <Typography variant="lead" color="white" className="text-2xl mt-16 opacity-80">
                            In ReVint, we believe that even your oldest cloth can have a second life. Our main feature let users to create their own products by following certain parameters, making everything easier to connect with other users that might want them.
                        </Typography>
                    </div>
                    <div className="bg-black p-8 text-white rounded-3xl m-4 w-1/2">
                        <Typography variant="h1" className="text-white flex justify-center">
                            Publish and sell
                        </Typography>
                    </div>
                </div>
            </div>
            <div className='bg-full h-full w-full flex flex-col items-center justify-center bg-black'>
                <Typography variant="h1" color="white" className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl mt-5">
                    Who are we ?
                </Typography>
                <div className=' bg-white h-full flex p-8 text-white rounded-3xl m-4 w-3/4'>
                    <Typography variant="lead" color="black" className="text-2xl mt-16 opacity-80">
                        We are software development students of Holberton School, who were motivated by the non-existent or non-functional vintage stores in Uruguay. Our vision is to connect users who wants to sell their old fashioned clothes to users looking for that kind of style. Team roles were assigned based on the strengths of each one of us, we have two Front-End developers, a Back-end developer and Project manager, and a Full-Stack Developer.
                    </Typography>
                </div>
            </div>
        </div>
    );
}
