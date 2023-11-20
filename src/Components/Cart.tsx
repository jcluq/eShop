import React from "react";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="  absolute right-0 top-[5%] flex h-[95%] w-2/12 flex-col bg-white">
      <CartItem />
      <div className="mt-auto">buttons</div>
    </div>
  );
}
