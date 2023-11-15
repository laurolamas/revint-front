import React from 'react';

export default function Home() {
    return (
        <footer className="bg-base-100 text-white p-4 mt-32">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">Who are we?</h3>
                        <p>
                        ​We are software development students who been motivated by the non-existent or non-functional online vintage stores in Uruguay. Our mindset is letting users to feel free by selling their products, the goal is connect those users with people who would want to buy them.
                            
                            Somos una empresa joven fundada en Montevideo, Uruguay en Octubre de 2023. Nuestra meta es ser líderes en el mercado de la reventa de productos vintage de segunda mano.
                        </p>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
