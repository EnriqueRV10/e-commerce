import React from "react";

const navBtns = [
  {
    id: 1,
    name: "Inicio",
    url: "#",
  },
  {
    id: 2,
    name: "Decoración",
    url: "#",
  },
  {
    id: 3,
    name: "Recamára",
    url: "#",
  },
  {
    id: 4,
    name: "Info",
    url: "#",
  },
];

export default function Navbar() {
  return (
    <div className="navbar bg-[#fdfdfe]/70 px-90 flex justify-between fixed z-20 h-16 text-neutral-600">
        <h1 className="text-3xl font-l uppercase underline underline-offset-4 decoration-3">
            Nestoria
        </h1>
        {navBtns.map((btn) => (
          <a 
            key={btn.id} 
            href={btn.url} 
            className="font-light"
          >
            {btn.name}
          </a>
        ))}
        <div className="flex space-x-3 font-light">
          <a href="#">Login</a>
          <a href="#">Carts</a>
        </div>
    </div>
  );
}
