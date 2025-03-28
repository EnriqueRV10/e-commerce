"use client"

import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";

const deco = [
  {
    id: 1,
    name: "Silla",
    image: "/images/deco/silla.jpg",
    url: "/producto/silla",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Lámpara",
    image: "/images/deco/lampara.jpg",
    url: "/producto/lampara",
    span: "col-span-1",
  },
  {
    id: 3,
    name: "Alfombra",
    image: "/images/deco/alfombra.png",
    url: "/producto/alfombra",
    span: "col-span-2 row-span-2",
  },
  {
    id: 4,
    name: "Mantas",
    image: "/images/deco/mantas.png",
    url: "/producto/mantas",
    span: "row-span-2 col-span-1",
  },
];

const cocina = [
  {
    id: 1,
    name: "barra",
    image: "/images/cocina/barra.jpg",
    url: "/producto/silla",
    span: "col-span-2 row-span-1",
  },
  {
    id: 2,
    name: "comedor1",
    image: "/images/cocina/comedor1.jpg",
    url: "/producto/lampara",
    span: "col-span-1 row-span-2",
  },
  {
    id: 3,
    name: "comedor2",
    image: "/images/cocina/comedor2.jpg",
    url: "/producto/alfombra",
    span: "col-span-1 row-span-2",
  },
  {
    id: 4,
    name: "mesa",
    image: "/images/cocina/mesa.webp",
    url: "/producto/cocina",
    span: "row-span-2 col-span-1",
  },
];

const carouselImages = [
  {
    id: "slide1",
    src: "/images/cocina.jpg",
    alt: "Cocina"
  },
  {
    id: "slide2",
    src: "/images/recamara.jpg",
    alt: "Cocina 2"
  },
  {
    id: "slide3",
    src: "/images/sala.jpg",
    alt: "Sala"
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const nextSlide = (currentSlide + 1) % carouselImages.length;
    setCurrentSlide(nextSlide);
  };

  const goToPrevSlide = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const prevSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
    setCurrentSlide(prevSlide);
  };

  return (
    <div className="mx-80">
      <div className="flex flex-row h-100 pt-16">
        <div className="flex justify-center bg-[#7aa7a4] w-1/3 px-10 flex-col rounded-bl-sm">
          <h1 className="font-semibold text-white uppercase text-3xl">
            Donde tu hogar encuentra su estilo
          </h1>
          <h2 className="font-semibold text-[#215c58] underline underline-offset-4 decoration-[#194441] decoration-2">
            Encuentra tu mueble ideal
          </h2>
        </div>

        <div className="carousel w-full relative h-90overflow-hidden rounded-br-sm"> {/* Altura fija y overflow hidden */}
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item absolute w-full h-full transition-opacity duration-300 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  fill
                  className="object-cover" 
                  priority
                />
              </div>
            </div>
          ))}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
            <button onClick={goToPrevSlide} className="btn btn-circle">
              ❮
            </button>
            <button onClick={goToNextSlide} className="btn btn-circle">
              ❯
            </button>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  goToSlide(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Resto del código para las secciones de decoración y cocina */}
      <div className="grid grid-cols-[repeat(3,minmax(100px,1fr))] grid-rows-[repeat(3,minmax(100px,1fr))] gap-4 w-full h-[700px] pt-5">
        <div className="bg-[#80a6ad] p-4 rounded-sm flex items-center justify-center text-white font-bold text-xl uppercase col-span-1">
          decoración
        </div>

        {deco.map((product) => (
          <Link
            key={product.id}
            href={product.url}
            className={`bg-gray-200 rounded-sm flex items-center justify-center ${product.span}`}
          >
            <Image
              src={product.image}
              width={900}
              height={900}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(3,minmax(100px,1fr))] grid-rows-[repeat(3,minmax(100px,1fr))] gap-4 w-full h-[700px] pt-10">
        <div className="bg-[#80a6ad] p-4 rounded-sm flex items-center justify-center text-white font-bold text-xl uppercase col-span-1 row-span-1">
          cocina
        </div>

        {cocina.map((product) => (
          <Link
            key={product.id}
            href={product.url}
            className={`bg-gray-200 rounded-sm flex items-center justify-center ${product.span}`}
          >
            <Image
              src={product.image}
              width={900}
              height={900}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}