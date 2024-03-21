import React, { MouseEvent, ChangeEvent, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartSwitch, ShopContext } from "../App";
import { ICartItem } from "../Reducers/Cart/CartTypes";
import { CartContext } from "../contexts/CartContext";
import { addItem } from "../Reducers/Cart/CartReducer";

export default function ProductPage() {
  const params = useParams();
  const products = useContext(ShopContext);
  const product = products.find((e) => e.id === Number(params.productId));
  console.log(product);
  const [productQuantity, setProductQuantity] = useState(1);
  const { setShowCart } = useContext(CartSwitch);
  const { dispatch } = useContext(CartContext);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductQuantity(Number(event.target.value));
    event.preventDefault();
  };
  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    if (product) {
      const cartItem: ICartItem = {
        product: product,
        quantity: productQuantity,
      };
      event.preventDefault();
      if (productQuantity > 0) {
        setShowCart(true);
        dispatch(addItem(cartItem));
        setProductQuantity(1);
      }
    }
  };
  return (
    <div className="flex h-[80%] w-full">
      <div className=" flex h-full   w-1/2 items-center justify-center">
        <div className="flex h-full w-[70%] items-center justify-center align-middle">
          <img src={product?.image} width="900px" height="auto"></img>
        </div>
      </div>
      <div className="flex w-1/2 flex-col p-10 pr-16 pt-20 text-right">
        <div className=" text-3xl">{product?.title}</div>
        <div className=" mt-10 text-xl">
          {Number(product?.price).toFixed(2)}€
        </div>
        <div className=" mt-10">{product?.description}</div>

        <div className="flex items-end justify-end align-middle">
          <div className="mt-10 flex w-[20%] items-end justify-end rounded-lg border-2 text-center align-middle">
            <button
              className="bg px-2"
              onClick={() =>
                productQuantity > 0 && setProductQuantity(productQuantity - 1)
              }
            >
              -
            </button>
            <input
              className="w-1/2 border-x-2 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              value={productQuantity}
              onChange={handleQuantityChange}
            />
            <button
              className="px-2"
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <button
            onClick={handleAddToCart}
            className="h-1/12 justify-center rounded-lg bg-green-400 p-1 px-2 text-left align-middle text-sm first-letter:text-center"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
