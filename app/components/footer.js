import React from "react";
import logo from "public/logo-ReVint.png";
import Image from "next/image";

export default function Footer() {
  // return (
  //   <footer className="bg-base-100 text-white p-4">
  //     <div className="container mx-auto">
  //       <div className="flex flex-col md:flex-row justify-between items-center">
  //         <div className="mb-4 md:mb-0">
  //           <h3 className="text-2xl font-bold">Contáctanos</h3>
  // <p>
  //   Puedes contactarnos en cualquier momento a través del correo electrónico:
  //   <a href="mailto:info@tudominio.com" className="text-primary">
  //     {" "}
  //     info@revint.com
  //   </a>
  // </p>;
  //         </div>
  //         <div>
  //           <ul className="flex space-x-4">
  //             <li>
  //               <a href="/about" className="text-white hover:text-primary">Acerca de nosotros</a>
  //             </li>
  //             <li>
  //               <a href="/terms" className="text-white hover:text-primary">Términos y condiciones</a>
  //             </li>
  //             <li>
  //               <a href="/privacy" className="text-white hover:text-primary">Política de privacidad</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
  return (
    //    <footer className="footer items-center p-4 bg-secondary text-neutral-content">
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <Image src={logo} alt="logo" width={50} height={50} />
        <p>
          Puedes contactarnos en cualquier momento a través del correo
          electrónico:
          <a href="mailto:info@tudominio.com" className="text-primary">
            {" "}
            info@revint.com
          </a>
        </p>
      </aside>
    </footer>
  );
}
