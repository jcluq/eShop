import React, { useContext } from "react";
import { ICartItem } from "../Reducers/Cart/CartTypes";
import { CartContext } from "../contexts/CartContext";
import {
  addItem,
  decreaseItem,
  removeItem,
} from "../Reducers/Cart/CartReducer";

export default function CartItem(props: { cartItem: ICartItem }) {
  const { dispatch } = useContext(CartContext);

  const handleAddItem = () => {
    const cartItem: ICartItem = {
      product: props.cartItem.product,
      quantity: 1,
    };
    dispatch(addItem(cartItem));
  };

  const handleDecreaseItem = () => {
    dispatch(decreaseItem(props.cartItem.product));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(props.cartItem.product));
  };

  return (
    <div className="flex h-[12%] w-full border-b-2 p-1">
      <div className="tileimage w-1/4  p-2">
        <img
          src={props.cartItem.product.image}
          className="h-full w-full object-scale-down"
        />
      </div>
      <div className=" ml-2 flex w-3/4 flex-col justify-between">
        <div className="truncate text-sm">{props.cartItem.product.title}</div>
        <div className="truncate text-xs ">{props.cartItem.product.price}€</div>
        <div className=" flex text-xs">
          <button
            className="h-full  justify-center rounded-full bg-slate-300 px-2 text-center  align-middle  "
            onClick={handleDecreaseItem}
          >
            -
          </button>
          <p className="mx-2">{props.cartItem.quantity}</p>
          <button
            className="h-full  justify-center rounded-full bg-slate-300 px-2 text-center align-middle "
            onClick={handleAddItem}
          >
            +
          </button>
          <button
            className="mx-2 h-full  justify-center rounded-full px-2 text-center align-middle "
            onClick={handleRemoveItem}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
