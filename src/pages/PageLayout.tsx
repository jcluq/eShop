import React, { Children, useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../Components/Cart";
import Navbar from "../Components/Navbar";

export default function PageLayout() {
  const [showCart, setShowCart] = useState(false);

  const showCartFunction = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div
        className="h-screen flex-col"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Navbar showCartFunction={showCartFunction} />
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
