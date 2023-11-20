import { useEffect, useState, createContext, useReducer } from "react";

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import PageLayout from "./pages/PageLayout";

import { CartContext } from "./contexts/CartContext";
import { ProductType } from "./Types/ProductType";
import { cartReducer } from "./Reducers/CartReducer";
import { initialCartState } from "./Reducers/CartTypes";

export const ShopContext = createContext<any>({
  products: [],
});

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <ShopContext.Provider value={products}>
        <BrowserRouter>
          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
