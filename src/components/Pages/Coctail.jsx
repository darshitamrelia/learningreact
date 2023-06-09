// import { useState } from "react"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
// import React,{ Link } from "react-router-dom";

function Coctail() {
    const[drinks,setDrinks] = useState([])

    // fetch('https://fakestoreapi.com/products/')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    

    function fetchData() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
          .then((resp) => resp.json())
          .then((data) => setDrinks(data.drinks));
        //   console.log(fetchData())
      }
    //   console.log(fetchData());

    useEffect(() =>{
        fetchData()
    }, [])
  
    return (
    <div className="container mb-4">
      <h1>Cocktail.</h1>
      <div className="row">
        {drinks.map((item) => {
          const { strDrinkThumb, idDrink, strDrink } = item;
          return (
            <div className="col-md-3 " key={idDrink}>
              <div className="card">
                <img src={strDrinkThumb} alt="" />
                <div className="card-body">
                  <h6>{strDrink}</h6>
                  <Link to={`/Coctail/${idDrink}`} className="btn btn-primary"  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 

export default Coctail
