import { createContext } from "react";
import { ICartState, initialCartState } from "../Reducers/Cart/CartTypes";
import { CartActions } from "../Reducers/Cart/CartActions";

export const CartContext = createContext<{
  state: ICartState;
  dispatch: React.Dispatch<CartActions>;
}>({
  state: initialCartState,
  dispatch: () => undefined,
});
