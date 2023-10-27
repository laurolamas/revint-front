import React from 'react';

export default function Home() {
    return (
        <footer className="bg-base-100 text-white p-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">Quienes somos?</h3>
                        <p>
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
