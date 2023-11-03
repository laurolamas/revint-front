import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <section>
                <div className="bg-vintage-pattern text-white p-8">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <h1 className="text-4xl font-extrabold">ReVint Vintage Store</h1>
                                <p className="text-xl mt-4">
                                    Discover the best vintage clothing from the 70s, 80s, and 90s.
                                </p>
                            </div>
                            <div>
                                <ul className="flex space-x-4">
                                    <li>
                                        <a className="text-xl">Store</a>
                                    </li>
                                    <li>
                                        <a className="text-xl">About us</a>
                                    </li>
                                    <li>
                                        <a className="text-xl">Contact</a>
                                    </li>
                                </ul>
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

            </section>
            <section>
                <h2 className="text-3xl font-extrabold mb-4">
                    About us
                </h2>
                <div className="columns-2 text-black container mx-auto mt-9 bg-white rounded-lg shadow-md p-6 ">
                    <p>
                        We are software development students who been motivated by the non-existent or non-functional online vintage stores in Uruguay. Our mindset is letting users to feel free by selling their products, the goal is connect those users with people who would want to buy them.
                    </p>
                </div>
            </section>
        </div>
    );
}
