import { ProductType } from "../../Types/ProductType";

export interface ICartState {
  cartItems: ICartItem[];
}

export interface ICartItem {
  product: ProductType;
  quantity: number;
}

export const initialCartState: ICartState = {
  cartItems: [],
};
