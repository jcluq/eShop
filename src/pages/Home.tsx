import React from "react";
import forntimage from "../images/frontimage.jpg";

export default function Home() {
  return (
    <div className="flex px-20  pt-36 text-center">
      <div className="w-6/12">
        <h3 className="   text-4xl">Welcome to Electronicfied.</h3>
        <h3 className="  text-2xl">
          your one-stop destination for the latests electronic trends
        </h3>
        <h4>
          Discover an unparalleled shopping experience with our extensive
          selection of products, unbeatable prices, and exceptional customer
          service. Shop now and transform your shopping journey with us.
        </h4>
        <button className="m-10 rounded-md bg-orange-200 px-10 text-lg">
          Shop Now
        </button>
      </div>

      <div className="h-full w-1/2 items-center px-10 align-middle">
        <img src={forntimage} alt="frontimage" className="rounded-full" />{" "}
      </div>
    </div>
  );
}
