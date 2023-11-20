import { createContext } from "react";
import { ICartState, initialCartState } from "../Reducers/CartTypes";
import { CartActions } from "../Reducers/CartActions";

export const CartContext = createContext<{
  state: ICartState;
  dispatch: React.Dispatch<CartActions>;
}>({
  state: initialCartState,
  dispatch: () => undefined,
});
