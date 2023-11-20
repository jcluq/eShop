import { useContext } from "react";
import { ShopContext } from "../App";
import ProductTile from "../Components/ProductTile";

export default function Shop() {
  const products = useContext(ShopContext);

  return (
    <div className="content flex h-full ">
      <div className="w-1/4 border-r-2">filter</div>
      <div className="grid w-3/4 grid-cols-3 gap-4 overflow-y-auto p-8">
        {products.map((p: any) => {
          return (
            <>
              <ProductTile product={p} />
            </>
          );
        })}
      </div>
    </div>
  );
}
