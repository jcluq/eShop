import React from "react";

export default function Home() {
  return (
    <div className="flex px-20  pt-36 text-center">
      <div className="w-6/12">
        <h3 className="  pt-32 text-4xl">Welcome to Electronicfied.</h3>
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
      <div className="bg-orange-400 "></div>
    </div>
  );
}
