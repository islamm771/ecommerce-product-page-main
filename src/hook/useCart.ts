import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("useCart must be used inside provider");

  return context;
};