import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='bg-orange-100'>
            <div className="bg-blend-multiply" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/37/fb/46/37fb46ead81514fce1a77e7271a97491.jpg)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="bg-blend-multiply" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/7d/69/bf/7d69bf77ce46d5fa38a08f5ff1b3e0bd.jpg)', width: '50%', height: '100%' }}>
                    <div className="bg-vintage-pattern text-white p-8">
                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                            <ul className="flex font-sans">
                                <li>
                                    <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">Store</button>
                                </li>
                                <li>
                                    <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">About us</button>
                                </li>
                                <li>
                                    <button className="text-sm btn btn-ghost text-white hover:bg-sky-900">Contact</button>
                                </li>
                            </ul>
                        </div>
                        <section className='container mx-auto mt-9 rounded-lg shadow-md p-6 w-2/4 text-center bg-sky-950 bg-gray-400'>
                            <h1 className="text-4xl font-extrabold font-serif">ReVint Vintage Store</h1>
                            <p className="text-2xl mt-4 font-serif">
                                Discover the best vintage clothing from the 70s, 80s, and 90s. ​ReVint is the best place to recirculate vintage fashion. We want our users to buy and re-sell their quality clothes while contributing to the environment.
                            </p>
                        </section>
                        <div className="container mx-auto ">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="mb-4 md:mb-0">
                                </div>
                            </div>
                        </div>
                        <div className="bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: "url('/vintage-banner.jpg')" }}>
                            <div className="container mx-auto flex items-center justify-center h-full">
                                <div className="text-center">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                        ¡Big Sale!
                                    </h2>
                                    <p className="text-lg md:text-xl text-white">
                                        Discount up to 50% on all products
                                    </p>
                                    <Link href="/products">
                                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full mt-4 inline-block text-lg md:text-xl font-semibold">
                                            Buy Now!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="text-black container mx-auto mt-9 bg-white rounded-lg shadow-md p-6 ">
                    <h2 className="text-3xl font-extrabold mb-4">
                        Who are we?
                    </h2>
                </div>
            </section>
            <section>
                <div className="text-black container mx-auto mt-9 bg-white rounded-lg shadow-md p-6 ">
                    <h2 className="text-3xl font-extrabold mb-4">
                        About us
                    </h2>
                    <p>
                        We are software development students who been motivated by the non-existent or non-functional online vintage stores in Uruguay. Our mindset is letting users to feel free by selling their products, the goal is connect those users with people who would want to buy them.
                    </p>
                </div>
            </section>
        </div>
    );
}
