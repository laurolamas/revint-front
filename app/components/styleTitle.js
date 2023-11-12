import React, { useState, useEffect } from 'react';

const WordTransition = () => {
  const [suffix, setSuffix] = useState('Vint');

  useEffect(() => {
    const interval = setInterval(() => {
      setSuffix((prevSuffix) => {
        switch (prevSuffix) {
          case 'Vint':
            return 'Cycle';
          case 'Cycle':
            return 'Vive';
          case 'Vive':
            return 'Vint';
          default:
            return 'Vint';
        }
      });
    }, 3000); // Cambia de palabra cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-8xl font-bold transition-opacity duration-500 ease-in-out">
      <span className="text-white">Re</span>
      <span className="inline-block"> {/* Contenedor para mantener las letras "Re" fijas */}
        {suffix === 'Vint' && <span className="text-white">{suffix}</span>}
        {suffix === 'Cycle' && <span className="text-green-500">{suffix}</span>}
        {suffix === 'Vive' && <span className="text-yellow-500">{suffix}</span>}
      </span>
    </div>
  );
};

export default WordTransition;
