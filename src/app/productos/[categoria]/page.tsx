"use client"

import React from "react";
import FilterProduct from "@/components/filterProduct";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function Page() {
  const { categoria } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedColor, setSelectedColor] = useState("Todos");

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch((err) => console.error("Error:", err));
  }, [categoria]);

  return (
    <div className="mx-80 mt-16">
      <h2 className="text-4xl font-bold pt-10">Decoración</h2>
      <div className="flex gap-6 p-6">
        <aside className="w-1/4 bg-neutral-400 p-4 rounded-lg">
          <FilterProduct />
        </aside>

        <main className="w-3/4">
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Ordenar por</option>
            <option value="low-to-high">Precio: Bajo a Alto</option>
            <option value="high-to-low">Precio: Alto a Bajo</option>
          </select>

          {/* Grid de productos */}
        <div className="grid grid-cols-2 gap-6">
          {filteredProducts
            .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
            .filter((p) => selectedColor === "Todos" || p.color === selectedColor)
            .map((product) => (
              <div key={product.id} className="p-4 border rounded shadow-md bg-white">
                <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
          ))}
        </div>
        </main>
      </div>
    </div>
  );
}
