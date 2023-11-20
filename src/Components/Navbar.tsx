import { Link, useSearchParams } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

export default function Navbar(props: any) {
  return (
    <nav className="navbar  flex h-[5%] w-full  items-center justify-between bg-slate-500 p-2">
      <div className="title justify-normal  pl-10 text-center text-2xl">
        eShop
      </div>
      <div>Search</div>
      <div className="buttons flex items-center justify-center gap-5 pr-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <button onClick={props.showCartFunction}>Cart</button>
      </div>
    </nav>
  );
}
