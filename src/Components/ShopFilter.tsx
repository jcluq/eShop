import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import {
  keyWord,
  showCategory,
  showPriceRange,
  showRate,
  sortBy,
} from "../Reducers/Filter/FilterReducer";
import { useLocation } from "react-router-dom";

import RatingStars from "./RatingStars";

export default function () {
  const [search, setSearch] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let searchWord = searchParams.get("s");

  useEffect(() => {
    if (searchWord) {
      searchWord && setSearch(searchWord);
      dispatchFilterState(keyWord(searchWord));
    }
  }, [location]);

  const { dispatchFilterState } = useContext(FilterContext);

  const handleSort = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchFilterState(sortBy(event.currentTarget.value));
  };

  const handleCategory = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchFilterState(showCategory(event.currentTarget.value));
  };

  const handlePrice = (event: ChangeEvent<HTMLInputElement>) => {
    let eventHolder = event.currentTarget.value.split("-");

    dispatchFilterState(
      showPriceRange(Number(eventHolder[0]), Number(eventHolder[1]))
    );
  };

  const handleRate = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchFilterState(showRate(Number(event.currentTarget.value)));
  };

  return (
    <div>
      <div className=" text-lg font-bold">Filter:</div>
      <div className="mt-3 w-full flex-col pl-2">
        <div className="sortby flex w-full flex-col">
          {search != "" && (
            <h3 className="font-semibold">Searching for: {search}</h3>
          )}
          <h3 className="font-semibold">Sort by:</h3>
          <div className="ml-3 flex flex-col">
            <div>
              <input
                className="mr-2"
                type="radio"
                id="sortByPriceLow"
                name="sortby"
                value="priceLow"
                onChange={handleSort}
              />
              <label htmlFor="priceLow">Price: Low First</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="sortByPriceHigh"
                name="sortby"
                value="priceHigh"
                onChange={handleSort}
              />
              <label htmlFor="priceHigh">Price: High First</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="nameA"
                name="sortby"
                value="nameA"
                onChange={handleSort}
              />
              <label htmlFor="nameA">Name: A first</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="nameZ"
                name="sortby"
                value="nameZ"
                onChange={handleSort}
              />
              <label htmlFor="nameZ">Name: Z First</label>
            </div>
          </div>
        </div>
        <div className="categories flex w-full flex-col">
          <h3 className="font-semibold">Categories:</h3>
          <div className="ml-3 flex flex-col">
            <div>
              <input
                className="mr-2"
                type="radio"
                id="all"
                name="category"
                value="all"
                onChange={handleCategory}
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="electronics"
                name="category"
                value="electronics"
                onChange={handleCategory}
              />
              <label htmlFor="electronics">Electronics</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="jewelery"
                name="category"
                value="jewelery"
                onChange={handleCategory}
              />
              <label htmlFor="jewelery">Jewelery</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="men's clothing"
                name="category"
                value="men's clothing"
                onChange={handleCategory}
              />
              <label htmlFor="men's clothing">Men's Clothing</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="women's clothing"
                name="category"
                value="women's clothing"
                onChange={handleCategory}
              />
              <label htmlFor="women's clothing">Women's Clothing</label>
            </div>
          </div>
        </div>
        <div className="priceRange flex w-full flex-col">
          <h3 className="font-semibold">Price:</h3>
          <div className="ml-3 flex flex-col">
            <div>
              <input
                className="mr-2"
                type="radio"
                id="0-10000"
                name="price"
                value="0-10000"
                onChange={handlePrice}
              />
              <label htmlFor="0-10000">All</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="0-50"
                name="price"
                value="0-50"
                onChange={handlePrice}
              />
              <label htmlFor="0-50">Up to 50€</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="50-100"
                name="price"
                value="50-100"
                onChange={handlePrice}
              />
              <label htmlFor="50-100">50€ - 100€</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="100-200"
                name="price"
                value="100-200"
                onChange={handlePrice}
              />
              <label htmlFor="100-200">100€ - 200€</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="200-500"
                name="price"
                value="200-500"
                onChange={handlePrice}
              />
              <label htmlFor="200-500">200€ - 500€</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                id="500-10000"
                name="price"
                value="500-10000"
                onChange={handlePrice}
              />
              <label htmlFor="500-10000">Over 500€</label>
            </div>
          </div>
        </div>
        <div className="priceRange flex w-full flex-col">
          <h3 className="font-semibold">Rating:</h3>
          <div className="ml-3 flex flex-col">
            <div className="flex">
              <input
                className="mr-2"
                type="radio"
                id="4+"
                name="rate"
                value="4"
                onChange={handleRate}
              />
              <label htmlFor="4" className=" flex align-top">
                <RatingStars rating={4} />
              </label>
            </div>
            <div className="flex">
              <input
                className="mr-2"
                type="radio"
                id="3+"
                name="rate"
                value="3"
                onChange={handleRate}
              />
              <label htmlFor="3">
                {" "}
                <RatingStars rating={3} />
              </label>
            </div>
            <div className="flex">
              <input
                className="mr-2"
                type="radio"
                id="2+"
                name="rate"
                value="2"
                onChange={handleRate}
              />
              <label htmlFor="2">
                {" "}
                <RatingStars rating={2} />
              </label>
            </div>
            <div className="flex">
              <input
                className="mr-2"
                type="radio"
                id="1+"
                name="rate"
                value="1"
                onChange={handleRate}
              />
              <label htmlFor="1">
                {" "}
                <RatingStars rating={1} />
              </label>
            </div>
            <div className="flex">
              <input
                className="mr-2"
                type="radio"
                id="0+"
                name="rate"
                value="0"
                onChange={handleRate}
              />
              <label htmlFor="0">
                {" "}
                <RatingStars rating={0} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
