import React from "react";
import logo from "public/logo-ReVint.png";
import Image from "next/image";

export default function Footer() {
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
