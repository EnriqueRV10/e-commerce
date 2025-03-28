import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Silla",
    image: "/images/silla.jpg",
    url: "/producto/silla",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Lámpara",
    image: "/images/lampara.jpg",
    url: "/producto/lampara",
    span: "",
  },
  {
    id: 3,
    name: "Alfombra",
    image: "/images/alfombra.jpg",
    url: "/producto/alfombra",
    span: "",
  },
  {
    id: 4,
    name: "Mantas",
    image: "/images/mantas.jpg",
    url: "/producto/mantas",
    span: "row-span-2",
  },
];

export default function Home() {
  return (
    <div className="mx-80">
      <div className="flex flex-row h-100">
        <div className="flex justify-center bg-[#7aa7a4] w-1/3 px-10 flex-col">
          <h1 className="font-semibold text-white uppercase text-3xl">
            Donde tu hogar encuentra su estilo
          </h1>
          <h2 className="font-semibold text-[#215c58] underline underline-offset-4 decoration-[#194441] decoration-2">
            Encuentra tu mueble ideal
          </h2>
        </div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 mt-6">
        {/* Texto "Decoración" */}
        <div className="bg-[#80a6ad] p-4 rounded-sm flex items-center justify-center text-white font-bold text-xl">
          DECORACIÓN
        </div>

        {/* Mapeo de productos */}
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.url}
            className={`bg-gray-200 p-4 rounded-sm flex items-center justify-center ${product.span}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </Link>
        ))}

        
      </div>
    </div>
  );
}
