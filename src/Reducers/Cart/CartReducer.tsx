import { ProductType } from "../../Types/ProductType";
import {
  AddItem,
  CartActionType,
  CartActions,
  ClearCart,
  DecreaseItem,
  RemoveItem,
} from "./CartActions";
import { ICartState, ICartItem } from "./CartTypes";

export function cartReducer(
  state: ICartState,
  action: CartActions
): ICartState {
  switch (action.type) {
    case CartActionType.AddItem:
      var cartState = state.cartItems;

      if (cartState.find((elem) => elem.product === action.payload.product)) {
        cartState = cartState.map((ci) => {
          if (ci.product === action.payload.product) {
            return { ...ci, quantity: ci.quantity + action.payload.quantity };
          }
          return ci;
        });

        return { ...state, cartItems: cartState };
      } else {
        var newCartState = JSON.parse(JSON.stringify(cartState));
        console.log(newCartState);
        newCartState.push(action.payload);
        console.log(newCartState);
        return { ...state, cartItems: newCartState };
      }

    case CartActionType.DecreaseItem:
      let decreasedCart = state.cartItems;
      const item = state.cartItems.find(
        (elem) => elem.product === action.payload
      );
      if (item) {
        if (item.quantity < 2) {
          decreasedCart = decreasedCart.filter((e) => e != item);
        } else {
          decreasedCart = decreasedCart.map((ci) => {
            if (ci.product === action.payload) {
              return { ...ci, quantity: ci.quantity - 1 };
            }
            return ci;
          });
        }
      }
      return { ...state, cartItems: decreasedCart };

    case CartActionType.RemoveItem:
      let removedCart = state.cartItems;
      const item2 = state.cartItems.find(
        (elem) => elem.product === action.payload
      );
      if (item2) {
        removedCart = removedCart.filter((e) => e != item2);
      }
      return { ...state, cartItems: removedCart };

    case CartActionType.ClearCart:
      console.log("Clear");
      return { ...state, cartItems: [] };
  }
}

export const addItem = (cartItem: ICartItem): AddItem => ({
  type: CartActionType.AddItem,
  payload: cartItem,
});

export const decreaseItem = (product: ProductType): DecreaseItem => ({
  type: CartActionType.DecreaseItem,
  payload: product,
});

export const removeItem = (product: ProductType): RemoveItem => ({
  type: CartActionType.RemoveItem,
  payload: product,
});

export const clearCart = (): ClearCart => ({
  type: CartActionType.ClearCart,
});
