import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ICartItem } from "../Reducers/CartTypes";
import { addItem } from "../Reducers/CartReducer";

export default function ProductTile(props: any) {
  const { dispatch } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductQuantity(Number(event.target.value));
    event.preventDefault();
  };

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    const cartItem: ICartItem = {
      product: props.product,
      quantity: productQuantity,
    };
    dispatch(addItem(cartItem));

    event.preventDefault();
  };

  const handleIncreaseQuantity = (event: MouseEvent<HTMLButtonElement>) => {
    setProductQuantity(...(productQuantity + 1));
  };

  return (
    <>
      <div className="aspect-[5/6] w-full flex-col justify-between rounded-xl border-2 p-4 shadow-lg">
        <div className="tileimage h-[60%] p-2">
          <img
            src={props.product.image}
            className="h-full w-full object-scale-down"
          />
        </div>
        <div className="truncate pt-1">{props.product.title}</div>

        <div className="flex items-baseline justify-between">
          <div className="w-full pt-1">{props.product.price}€</div>
          <div className="mt-3 flex w-[80%] justify-center rounded-lg border-2 text-center align-middle">
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

        <div className="flex w-full justify-end pt-2">
          <button
            className="h-1/12 justify-center rounded-lg bg-green-400 p-1 px-2 text-left align-middle text-xs first-letter:text-center"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
