"use client"

import Image from "next/image";

import { product } from "@/data";
import { useCart } from "@/hook/useCart";
import { Trash2Icon } from "lucide-react";
import img from "../assets/image-product-1-thumbnail.jpg";

const Cart = () => {
  const { quantity, setQuantity } = useCart();

  return (
    <div className="absolute top-16 right-0 w-80 bg-white rounded-xl shadow-xl z-50">
      <h3 className="font-bold border-b border-gray-300 p-3">
        Cart
      </h3>

      {quantity > 0 ? (
        <div className="flex p-4 items-center gap-2">
          <div>
            <Image className="size-10 rounded-sm" src={img} alt="" />
          </div>
          <div>
            <h5 className="text-sm font-semibold">{product.name}</h5>
            <p className="text-sm text-gray-400">{product.price} * {quantity} = {product.price * quantity} $</p>
          </div>
          <div>
            <button className="text-gray-400" onClick={() => setQuantity(0)}>
              <Trash2Icon size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="h-44 flex items-center justify-center">
          <p className="font-bold text-gray-500">
            Your cart is empty
          </p>
        </div>
      )}
    </div>
  )
}

export default Cart