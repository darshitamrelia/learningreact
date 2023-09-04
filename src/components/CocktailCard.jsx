import React from "react";
import { useNavigate } from "react-router-dom";

function CocktailCard({ item }) {
  const { strDrinkThumb, strCategory, strDrink, idDrink } = item;
  const navigate = useNavigate();

  return (
    <div
      className="col-md-3 mb-3"
      onClick={() => navigate(`/cocktail/${idDrink}`)}
    >
      <div className="card" style={{ cursor: "grab" }}>
        <img src={strDrinkThumb} className="w-100" alt="" />
        <div className="card-body">
          <h6>{strDrink}</h6>
          <p>{strCategory}</p>
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
