"use client";

import React from 'react';
import Link from 'next/link';
import { Typography, Button } from "@material-tailwind/react";


export default function Home() {
    return (
        <div className='h-screen v-screen items-auto'>
            <div className="bg-cover bg-full h-full flex items-center" style={{ backgroundImage: 'url(/miera_5-4-2.jpg)' }}>
                <div className="bg-cover bg-left w-1/4 h-full">
                    <div className="bg-vintage-pattern text-white p-8">
                        <div className="flex font-sans space-x-4">
                            <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">Store</button>
                            <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">About us</button>
                            <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">Contact</button>
                        </div>
                        <div className="relative h-full w-full">
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                                <div className="w-3/4 text-left md:w-/4">
                                    <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl mt-16" >
                                        ReVint Vintage Clothing
                                    </Typography>
                                    <Typography variant="lead" color="white" className="mb-12 opacity-80" >
                                        ReVint Vintage is the best place to recirculate vintage fashion. We want our users to buy and re-sell their quality clothes while contributing to the environment.                                        </Typography>
                                    <div className="flex justify-left gap-2">
                                        <Button size="lg" color="white"> Explore </Button>
                                        <Button size="lg" color="white" variant="text"> Gallery </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-full h-full flex items-right" style={{ backgroundImage: 'url(/ppl.jpg)' }}>
                <div className="bg-cover bg-center w-1/2 h-full">
                    <div className="bg-vintage-pattern text-white p-8">
                        <div className="rounded-xl">
                            <div className="relative h-full w-full">
                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                                    <div className="w-3/4 text-right md:w-/4 justify-right" style={{ textAlign: 'right' }}>
                                        <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl mt-16" >
                                            Where Vintage Meets Modern
                                        </Typography>
                                        <Typography variant="lead" color="white" className="mb-12 opacity-80" >
                                            The best of both worlds, plus a sustainable approach. Try our customer's collection of vintage clothes with a modern twist.
                                        </Typography>

                                        <div className="flex justify-center gap-2">
                                            <Button size="lg" color="white"> Explore </Button>
                                            <Button size="lg" color="white" variant="text"> Gallery </Button>
                                        </div>
                                        <div>Press <kbd className="kbd kbd-sm">F</kbd> to pay respects.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-full h-full w-full items-right" style={{ backgroundImage: 'url(/recycle.jpg)' }}>
                <div className="bg-cover bg-center w-1/2 h-full h-1/2 w-full">
                    <div className="bg-vintage-pattern text-white p-8">
                        <div className="rounded-xl">
                            <div className="relative h-full w-full">
                                <div className="absolute inset-0 grid h-full w-full place-items-right bg-black/75">
                                    <div className="w-3/4 text-right md:w-/4 justify-right" style={{ textAlign: 'right' }}>
                                        <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl mt-16" >
                                            Recycle Your Clothes
                                        </Typography>
                                        <Typography variant="lead" color="white" className="mb-12 opacity-80" >
                                            We have to start thinking about the future of our planet. The fashion industry is one of the most polluting industries in the world. We want to help you recycle your clothes and give them a second life.
                                        </Typography>
                                        <div className="flex justify-center gap-2">
                                            <Button size="lg" color="white"> Explore </Button>
                                            <Button size="lg" color="white" variant="text"> Gallery </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
            </section>
        </div>
    );
}
