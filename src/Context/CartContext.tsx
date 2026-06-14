"use client"
import { createContext, useState } from "react";

interface CartContextType {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

