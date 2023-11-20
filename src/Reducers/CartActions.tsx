import { ProductType } from "../Types/ProductType";
import { ICartItem } from "./CartTypes";

export enum CartActionType {
  AddItem,
  RemoveItem,
  ClearCart,
}

export interface AddItem {
  type: CartActionType.AddItem;
  payload: ICartItem;
}

export interface RemoveItem {
  type: CartActionType.RemoveItem;
  payload: ProductType;
}

export interface ClearCart {
  type: CartActionType.ClearCart;
}

export type CartActions = AddItem | RemoveItem | ClearCart;
