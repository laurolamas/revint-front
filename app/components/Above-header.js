"use client"
import React, { useState } from 'react';

export default function Above() {
    const [isMenuOpen1, setIsMenuOpen1] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);

    return (
        <div className="flex items-center justify-center space-x-4">
            <div className="dropdown dropdown-hover">
                <button
                    className="btn bg-transparent border-none text-white hover:text-red-300"
                    onMouseEnter={() => setIsMenuOpen1(true)}
                    onMouseLeave={() => setIsMenuOpen1(false)}
                >
                    Ellos
                </button>
                {isMenuOpen1 && (
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute">
                        <li><a>Calzado</a></li>
                        <li><a>T-Shirts</a></li>
                    </ul>
                )}
            </div>

            <div className="dropdown dropdown-hover">
                <button
                    className="btn bg-transparent border-none text-white hover:text-red-300"
                    onMouseEnter={() => setIsMenuOpen2(true)}
                    onMouseLeave={() => setIsMenuOpen2(false)}
                >
                    Unisex
                </button>
                {isMenuOpen2 && (
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute">
                        <li><a>Calzado</a></li>
                        <li><a>T-Shirts</a></li>
                    </ul>
                )}
            </div>

            <div className="dropdown dropdown-hover">
                <button
                    className="btn bg-transparent border-none text-white hover:text-red-300"
                    onMouseEnter={() => setIsMenuOpen3(true)}
                    onMouseLeave={() => setIsMenuOpen3(false)}
                >
                    Ellas
                </button>
                {isMenuOpen3 && (
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute">
                        <li><a>Calzado</a></li>
                        <li><a>T-Shirts</a></li>
                    </ul>
                )}
            </div>
        </div>
    );
}