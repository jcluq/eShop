import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";
import { clearCart } from "../Reducers/Cart/CartReducer";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const getTotal = () => {
    let total = 0;
    if (state.cartItems.length > 0) {
      state.cartItems.forEach((e) => {
        total += e.product.price * e.quantity;
      });
    }
    return total;
  };

  return (
    <div className="  absolute right-0 top-[5%] flex h-[95%] w-2/12 flex-col border-l bg-white">
      <div className="h-[5%] border-b-2 p-2 pb-8 align-middle text-xl">
        Shopping Cart:
      </div>
      <div className=" flex h-[80%] flex-col overflow-y-auto">
        {state.cartItems.map((ci) => {
          return <CartItem key={ci.product.id} cartItem={ci} />;
        })}
      </div>
      <div className="mt-auto flex h-[25%] w-full flex-col bg-slate-200 ">
        <div className="flex justify-between">
          <div className="text-md m-3"> Total: </div>
          <div className="text-md m-3">{Number(getTotal()).toFixed(2)}€</div>
        </div>
        <div className="flex  w-full flex-col items-center justify-center gap-2">
          <button className=" w-5/6 items-center justify-center rounded-full bg-green-400 p-2">
            Continue to Checkout
          </button>
          <button
            className=" w-5/6 items-center justify-center rounded-full bg-slate-300 p-2"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
