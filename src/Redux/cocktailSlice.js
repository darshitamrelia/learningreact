import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Await } from "react-router-dom";

// Anyu name describe you want
// export const getCocktailList = createAsyncThunk(
//   "getAllCocktailList",
//   async () => {
//     // ============================== Axios Method ======================

//     try {
//       const response = await axios.get(
//         "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
//       );
//       return response.data.drinks;
//     } catch (error) {
//       console.log("error", error);
//     }

//     // ================================  FEtch Method ======================
//     // try {
//     //   const response = await fetch(
//     //     "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
//     //   );
//     //   const data = await response.json();
//     //   return data.drinks;
//     // } catch (error) {
//     //   console.log("error", error);
//     // }
//   }
// );

// =============================== 2nd method ==============================

// => It performs a asyncronise function...And it is mostly used in redux..(Main Point)  <<<<<<<<<<<<<<<<<<<<<=================================
export const getCocktailList = createAsyncThunk(
  "fetchCocktailList",
  async (paramter, {}) => {
    const { search } = paramter;
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      return response.data.drinks;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getCocktailDetails = createAsyncThunk(
  "fetchCocktailDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      return response.data.drinks[0];
    } catch (error) {}
  }
);

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    cocktailList: [],
    loading: true,
    cocktailDetails: {},
  },
  reducers: {},
  extraReducers: {
    [getCocktailList.pending]: (state, action) => {
      state.loading = true;
    },
    [getCocktailList.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktailList = action.payload;
    },
    [getCocktailList.rejected]: (state, action) => {
      state.loading = false;
    },
    [getCocktailDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getCocktailDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktailDetails = action.payload;
    },
    [getCocktailDetails.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default cocktailSlice.reducer;
