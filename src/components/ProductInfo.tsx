"use client"

import { useCart } from "@/hook/useCart";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { product } from "../data/index";

export default function ProductInfo() {
  const [count, setCount] = useState(0);

  const { setQuantity } = useCart();

  return (
    <div className="xl:py-10">

      <span className="uppercase tracking-widest text-orange-500 font-bold">
        {product.company}
      </span>

      <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-8">
        {product.name}
      </h1>

      <p className="text-gray-500 mb-8">
        These low-profile sneakers are your perfect
        casual wear companion.
      </p>

      <div className="mb-8">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            ${product.price}
          </span>

          <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded-md font-bold">
            50%
          </span>
        </div>

        <span className="line-through text-gray-500">
          ${product.oldPrice}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-4">

        <div className="flex">
          <button
            className="px-5 py-3 bg-slate-100 rounded-l-lg"
            onClick={() =>
              setCount((prev) =>
                prev > 0 ? prev - 1 : 0
              )
            }
          >
            -
          </button>

          <div className="px-5 py-3 bg-slate-100 flex items-center justify-center">
            {count}
          </div>

          <button
            className="px-5 py-3 bg-slate-100 rounded-r-lg"
            onClick={() =>
              setCount((prev) => prev + 1)
            }
          >
            +
          </button>
        </div>

        <button
          onClick={() => setQuantity(count)}
          className="flex-1 py-3 bg-orange-500 text-white rounded-lg flex justify-center items-center gap-2 shadow-lg"
        >
          <ShoppingCart size={18} />
          Add To Cart
        </button>
      </div>
    </div>
  );
}