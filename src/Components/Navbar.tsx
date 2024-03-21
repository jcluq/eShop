import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { ChangeEvent, useContext, useState, KeyboardEvent } from "react";
import { CartSwitch } from "../App";
import { redirect } from "react-router-dom";

export default function Navbar() {
  const { showCart, setShowCart } = useContext(CartSwitch);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    {
      if (search != "") {
        navigate({
          pathname: "/shop",
          search: `?s=${search}`,
        });
      }
    }
    setSearch("");
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <nav className="navbar  flex h-[5%] w-full  items-center justify-between bg-slate-500 p-2 align-middle">
      <div className="title flex  w-1/3 justify-start pl-10 text-center text-2xl">
        <Link to="/">eShop</Link>
      </div>
      <div className="flex h-[80%] w-1/3  items-center justify-center align-middle">
        <input
          type="text"
          placeholder="Search"
          className="h-full w-[80%] rounded-l-full px-5"
          onChange={handleSearchChange}
          onKeyDown={handleEnterKey}
          value={search}
        ></input>
        <button
          className="h-full  rounded-r-full border-l border-neutral-400 bg-white px-2 "
          onClick={handleSearch}
        >
          &gt;
        </button>
      </div>
      <div className="buttons flex w-1/3 items-center justify-end  gap-5 pr-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <button onClick={() => setShowCart(!showCart)}>Cart</button>
      </div>
    </nav>
  );
}
