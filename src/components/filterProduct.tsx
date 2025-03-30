"use client";

import React from "react";
import { useState } from "react";

export default function FilterProduct() {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedColor, setSelectedColor] = useState("Todos");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Filtrar por</h2>

      {/* Collapse para Filtro de Precio */}
      <div className="collapse collapse-arrow bg-gray-100 p-4 rounded-lg mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-semibold cursor-pointer">
          Precio
        </div>
        <div className="collapse-content">
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
          <p className="text-sm text-gray-500">
            ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      </div>

      {/* Collapse para Filtro de Color */}
      <div className="collapse collapse-arrow bg-gray-100 p-4 rounded-lg">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-semibold cursor-pointer">
          Color
        </div>
        <div className="collapse-content">
          <select
            className="w-full mt-2 p-2 border rounded"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option>Todos</option>
            <option>Blanco</option>
            <option>Negro</option>
            <option>Madera</option>
          </select>
        </div>
      </div>
    </div>
  );
}
