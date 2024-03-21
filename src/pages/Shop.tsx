import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../App";
import ProductTile from "../Components/ProductTile";
import { ProductType } from "../Types/ProductType";
import ShopFilter from "../Components/ShopFilter";
import { FilterContext } from "../contexts/FilterContext";
import { populateList } from "../Reducers/Filter/FilterReducer";

export default function Shop() {
  const products = useContext(ShopContext);
  const { filterState, dispatchFilterState } = useContext(FilterContext);

  useEffect(() => {
    dispatchFilterState(populateList(products));
  }, [products]);

  return (
    <div className="content flex h-full ">
      <div className=" w-1/4 flex-col border-r-2 p-2">
        <ShopFilter />
      </div>
      <div className="grid w-3/4 grid-cols-3 gap-4 overflow-y-auto p-8">
        {filterState.filteredProducts.map((p: ProductType) => {
          return <ProductTile key={p.id} product={p} />;
        })}
      </div>
    </div>
  );
}
