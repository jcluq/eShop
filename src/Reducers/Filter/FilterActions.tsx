import { ProductType } from "../../Types/ProductType";

export enum FilterActionType {
  SortBy,
  ShowCategory,
  ShowRate,
  ShowPriceRange,
  PopulateList,
  KeyWord,
}

export interface SortBy {
  type: FilterActionType.SortBy;
  payload: { sortValue: string };
}

export interface ShowCategory {
  type: FilterActionType.ShowCategory;
  payload: { category: string };
}

export interface ShowRate {
  type: FilterActionType.ShowRate;
  payload: { rate: number };
}

export interface ShowPriceRange {
  type: FilterActionType.ShowPriceRange;
  payload: { min: number; max: number };
}

export interface KeyWord {
  type: FilterActionType.KeyWord;
  payload: { word: string };
}

export interface PopulateList {
  type: FilterActionType.PopulateList;
  payload: ProductType[];
}

export type FilterActions =
  | SortBy
  | ShowCategory
  | ShowRate
  | ShowPriceRange
  | PopulateList
  | KeyWord;
