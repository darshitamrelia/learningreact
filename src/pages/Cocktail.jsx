import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktailList } from "../Redux/cocktailSlice";
import CocktailCard from "../components/CocktailCard";

function Cocktail() {
  const { loading, cocktailList } = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getCocktailList({ search: searchValue }));
  }, [searchValue]);

  return (
    <div className="main">
      <div className="container-fluid">
        <form className="d-flex py-2" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        {loading && <h2>Loading</h2>}
        <div className="row py-5">
          {cocktailList &&
            cocktailList.map((item, index) => {
              return <CocktailCard key={index} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
