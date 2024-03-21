import { ProductType } from "../../Types/ProductType";

export interface FilteredProducts {
  mainProducts: ProductType[];
  filteredProducts: ProductType[];
  filters: {
    sortBy: string;
    category: string;
    priceRange: { min: number; max: number };
    rating: number;
    word: string;
  };
}
export const initialFilteredProductsState: FilteredProducts = {
  mainProducts: [],
  filteredProducts: [],
  filters: {
    sortBy: "rating5",
    category: "all",
    priceRange: { min: 0, max: 1000000 },
    rating: 0,
    word: "",
  },
};
