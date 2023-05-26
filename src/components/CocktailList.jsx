// import React from 'react'
import React,{ useEffect, useState } from "react";

export default function CocktailList() {
    const[drinks,setDrinks]=useState([]);
    const[isLoading,setIsLoading]=useState(true)
    const[searchvalue,setSearchValue]=useState("")

    function fetchCocktail(){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchvalue}`)
        .then((resp) => resp.json())
        .then((data)=>{
            setDrinks(data.drinks)
            setIsLoading(false)
        })
    }
    
    useEffect(()=>{
        fetchCocktail()
    },[]);

    function handleSearch() {
        fetchCocktail();
    }

    if(isLoading){
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> 
        )
    }
  return (
    <div>
       <div className="container py-5">
    <h4 style={{textAlignVertical: "center",textAlign: "center",}}>Cocktail </h4>
    <input
      value={searchvalue}
      type="text"
      placeholder="Search your drink..."
      className="form-control d-flex"
      onChange={(e) => setSearchValue(e.target.value)}
    />
    <button onClick={handleSearch} className="btn btn-primary w-100 mt-3">
      Search
    </button>
    <hr />
        <div className="row">
            {drinks.map((item)=>{
                // const {idDrink,strDrinkThumb,strDrink,strInstructions}=item;
                const{strDrink, strInstructions, strDrinkThumb, idDrink} = item;
                return(
                    <div key={idDrink} className="col-6 col-md-3 mb-4">
                        <div className="card">
                            <img src={strDrinkThumb} alt=""></img>
                            <div className="card-body">
                                <h3>Drink Name:{strDrink}</h3>
                                <h4 className="text-truncate">{strInstructions}</h4>
                            </div>
                            <button className="btn btn-info">Buy Now</button>
                        </div>
                        </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}
