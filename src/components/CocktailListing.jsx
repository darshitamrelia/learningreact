import React,{ useEffect, useState } from "react";

function CocktailListing() {

    const[drinks,setDrinks]=useState([]);
    const[searchvalue,setSearchValue]=useState("")

    function fetchCocktail(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchvalue}')
        .then((resp) => resp.json())
        .then((data)=>{
            setDrinks(data.drinks)
        })
    }
    
    useEffect(()=>{
        fetchCocktail()
    },[]);

    function handleSearch() {
        fetchCocktail();
    }

  return (
    <div className="container py-5">
    <h4>Cocktail </h4>
    <input
      value={searchvalue}
      type="text"
      placeholder="Search your drink..."
      className="form-control"
      onChange={(e) => setSearchValue(e.target.value)}
    />
    <button onClick={handleSearch} className="btn btn-primary">
      Search
    </button>
    <hr />
        <div className="row">
            {drinks.map((item)=>{
                const {idDrink,strDrinkThumb,strDrink,strInstructions}=item;

                return(
                    <div key={idDrink} className="col-6 col-md-4 mb-4">
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
  )
}
export default CocktailListing

