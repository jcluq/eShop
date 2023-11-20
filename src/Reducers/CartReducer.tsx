import { ProductType } from "../Types/ProductType";
import {
  AddItem,
  CartActionType,
  CartActions,
  ClearCart,
  RemoveItem,
} from "./CartActions";
import { ICartState, ICartItem } from "./CartTypes";

export function cartReducer(
  state: ICartState,
  action: CartActions
): ICartState {
  switch (action.type) {
    case CartActionType.AddItem:
      console.log(action.payload);
      return { ...state };
    case CartActionType.RemoveItem:
      console.log(action.payload);
      return { ...state };
    case CartActionType.ClearCart:
      console.log("Clear");
      return { ...state };
  }
}

export const addItem = (cartItem: ICartItem): AddItem => ({
  type: CartActionType.AddItem,
  payload: cartItem,
});

export const removeItem = (product: ProductType): RemoveItem => ({
  type: CartActionType.RemoveItem,
  payload: product,
});

export const clearCart = (): ClearCart => ({
  type: CartActionType.ClearCart,
});
