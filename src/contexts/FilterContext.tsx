import { createContext, Dispatch } from "react";
import { FilterActions } from "../Reducers/Filter/FilterActions";
import {
  FilteredProducts,
  initialFilteredProductsState,
} from "../Reducers/Filter/FilterTypes";

export const FilterContext = createContext<{
  filterState: FilteredProducts;
  dispatchFilterState: Dispatch<FilterActions>;
}>({
  filterState: initialFilteredProductsState,
  dispatchFilterState: () => undefined,
});
