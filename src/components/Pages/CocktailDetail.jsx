import { useEffect, useState } from "react";
// import React, {useEffect , useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";

function CocktailDetail() {
  const { id } = useParams();
  const [drinksDetails, setDrinksDetails] = useState({});
  const navigate = useNavigate();

  function fetchData() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDrinksDetails(data.drinks[0]);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container p-5">
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
      <div
        style={{ backgroundColor: "#f0f0f5" }}
        className="main p-5 rounded border border-5"
      >
        <h4>Product ID: {id}</h4>
        <div className="row">
          <div className="col-md-4">
            <img
              src={drinksDetails.strDrinkThumb}
              style={{ height: "350px", borderRadius: "7px" }}
              alt=""
            ></img>
          </div>
          <div className="col-md-8">
            <h4>Drink:{drinksDetails.strDrink}</h4>
            <p>{drinksDetails.strInstructions}</p>
            <h1 style={{ color: " #ff4d4d" }} className="mt-5">
              Blended by-
            </h1>
            <h1
              style={{
                fontSize: "85px",
                fontWeight: "600",
                color: " #ff6666",
              }}
            >
              Darshit Amrelia
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetail;
