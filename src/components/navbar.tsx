import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-[#fdfdfe]/70 px-90 flex justify-between fixed z-20 h-16 text-neutral-600">
        <h1 className="text-3xl font-semibold uppercase underline underline-offset-4 decoration-3">
            Nestoria
        </h1>
          <a href="#">Inicio</a>
          <a href="#">Decoración</a>
          <a href="#">Cocina</a>
          <a href="#">Recámara</a>
          <a href="#">Info</a>
          <div className="flex space-x-3">
            <a href="#">Login</a>
            <a href="#">Carts</a>
          </div>
    </div>
  );
}
