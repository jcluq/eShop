import { useEffect, useState, createContext, useReducer } from "react";

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import PageLayout from "./pages/PageLayout";

import { CartContext } from "./contexts/CartContext";
import { ProductType } from "./Types/ProductType";
import { cartReducer, clearCart } from "./Reducers/Cart/CartReducer";
import { initialCartState } from "./Reducers/Cart/CartTypes";
import { FilterReducer, populateList } from "./Reducers/Filter/FilterReducer";
import { initialFilteredProductsState } from "./Reducers/Filter/FilterTypes";
import { FilterContext } from "./contexts/FilterContext";
import ProductPage from "./Components/ProductPage";

type productsContextType = ProductType[];
export const ShopContext = createContext<productsContextType>([]);
type showCartType = {
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
};
export const CartSwitch = createContext<showCartType>({
  showCart: false,
  setShowCart: () => undefined,
});

function App() {
  const [products, setProducts] = useState<productsContextType>([]);
  const [showCart, setShowCart] = useState<showCartType["showCart"]>(false);
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const [filterState, dispatchFilterState] = useReducer(
    FilterReducer,
    initialFilteredProductsState
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    dispatchFilterState(populateList(products));
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <FilterContext.Provider value={{ filterState, dispatchFilterState }}>
        <ShopContext.Provider value={products}>
          <CartSwitch.Provider value={{ showCart, setShowCart }}>
            <BrowserRouter>
              <Routes>
                <Route element={<PageLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="/product/:productId" element={<ProductPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CartSwitch.Provider>
        </ShopContext.Provider>
      </FilterContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
