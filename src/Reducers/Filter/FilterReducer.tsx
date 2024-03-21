import { defaultMethod } from "react-router-dom/dist/dom";
import { ProductType } from "../../Types/ProductType";
import {
  FilterActionType,
  FilterActions,
  KeyWord,
  PopulateList,
  ShowCategory,
  ShowPriceRange,
  ShowRate,
  SortBy,
} from "./FilterActions";
import { FilteredProducts } from "./FilterTypes";

export function FilterReducer(
  state: FilteredProducts,
  action: FilterActions
): FilteredProducts {
  let newState = state;
  switch (action.type) {
    case FilterActionType.SortBy:
      newState = {
        ...newState,
        filters: { ...newState.filters, sortBy: action.payload.sortValue },
      };
      break;

    case FilterActionType.ShowCategory:
      newState = {
        ...newState,
        filters: { ...newState.filters, category: action.payload.category },
      };
      break;

    case FilterActionType.ShowPriceRange:
      newState = {
        ...newState,
        filters: {
          ...newState.filters,
          priceRange: {
            min: action.payload.min,
            max: action.payload.max,
          },
        },
      };
      break;

    case FilterActionType.ShowRate:
      newState = {
        ...newState,
        filters: { ...newState.filters, rating: action.payload.rate },
      };
      break;

    case FilterActionType.PopulateList:
      return {
        ...state,
        filteredProducts: action.payload,
        mainProducts: action.payload,
      };

    case FilterActionType.KeyWord:
      newState = {
        ...newState,
        filters: { ...newState.filters, word: action.payload.word },
      };
      break;
  }

  let newArray = newState.mainProducts;

  if (newState.filters.category != "") {
    newArray = newArray.filter((e) =>
      e.title.toLowerCase().includes(newState.filters.word.toLowerCase())
    );
    let categoryArray = newState.mainProducts.filter(
      (e) => e.category.toLowerCase() === newState.filters.word.toLowerCase()
    );
    newArray = newArray.concat(categoryArray);
    newArray = Array.from(new Set(newArray));
  }

  switch (newState.filters.sortBy) {
    case "priceLow":
      newArray = newArray.sort((a, b) => a.price - b.price);
      break;
    case "priceHigh":
      newArray = newArray.sort((a, b) => b.price - a.price);
      break;
    case "nameA":
      newArray = newArray.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      break;
    case "nameZ":
      newArray = newArray.sort((a, b) =>
        a.title > b.title ? -1 : b.title > a.title ? 1 : 0
      );
      break;
    case "ratingHigh":
      newArray = newArray.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
  }

  newState.filters.category != "all" &&
    (newArray = newArray.filter(
      (e) => e.category === newState.filters.category
    ));

  newArray = newArray.filter(
    (e) =>
      e.price > newState.filters.priceRange.min &&
      e.price < newState.filters.priceRange.max
  );

  newArray = newArray.filter((e) => e.rating.rate > newState.filters.rating);

  newState = { ...newState, filteredProducts: newArray };
  console.log(newState);
  return newState;
}

export const sortBy = (sortValue: string): SortBy => ({
  type: FilterActionType.SortBy,
  payload: { sortValue },
});

export const showCategory = (category: string): ShowCategory => ({
  type: FilterActionType.ShowCategory,
  payload: { category },
});

export const showPriceRange = (min: number, max: number): ShowPriceRange => ({
  type: FilterActionType.ShowPriceRange,
  payload: { min, max },
});

export const showRate = (rate: number): ShowRate => ({
  type: FilterActionType.ShowRate,
  payload: { rate },
});

export const populateList = (products: ProductType[]): PopulateList => ({
  type: FilterActionType.PopulateList,
  payload: products,
});

export const keyWord = (word: string): KeyWord => ({
  type: FilterActionType.KeyWord,
  payload: { word },
});
