import React, { Children, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../Components/Cart";
import Navbar from "../Components/Navbar";
import { CartContext } from "../contexts/CartContext";
import { CartSwitch } from "../App";

export default function PageLayout() {
  const { showCart, setShowCart } = useContext(CartSwitch);

  return (
    <>
      <div
        className="h-screen flex-col"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div className="contentbody flex h-[95%] overflow-y-hidden  bg-slate-600">
          <div className="content m-auto h-full w-8/12 flex-col  bg-white">
            <Outlet />
          </div>
        </div>
        {showCart && <Cart />}
      </div>
    </>
  );
}
