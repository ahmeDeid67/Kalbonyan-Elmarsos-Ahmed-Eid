import { createContext } from "react";

const CartContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
