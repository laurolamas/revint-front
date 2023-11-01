import React from 'react';

export default function Home() {
    return (
        <div className="bg-vintage-pattern text-white p-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-4xl font-extrabold">Vintage Clothing Store</h1>
                        <p className="text-xl mt-4">
                            Descubre la moda vintage con estilo.
                        </p>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            <li><a href="/shop">Tienda</a></li>
                            <li><a href="/about">Acerca de nosotros</a></li>
                            <li><a href="/contact">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
