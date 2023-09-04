import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function getLocalStorage() {
  const isLogin = localStorage.getItem("appLogin");
  if (isLogin) {
    return true;
  } else {
    return false;
  }
}

export const login = createAsyncThunk(
  "login",
  async ({ formValue, navigate }, { dispatch }) => {
    try {
      dispatch(startLoading());
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAS046Oq_-CqeRYgZ-7yTlKDXIzhGrQyco",
        formValue
      );
      // console.log("response", response);

      if (response.status === 200) {
        navigate("/");
        dispatch(loginSuccess());
      }
    } catch (error) {
      dispatch(loginFail(error.response.data.error.message));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isLogin: getLocalStorage(),
    error: false,
    errorMessage: "",
  },
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem("appLogin", "true");
      state.loading = false;
      state.isLogin = true;
    },
    loginFail: (state, action) => {
      // console.log("action error", action.payload);
      let errorMessage = action.payload;
      if (
        errorMessage === "INVALID_PASSWORD" ||
        errorMessage === "EMAIL_NOT_FOUND"
      ) {
        errorMessage = "Email or password are incorrect!";
      }
      state.loading = false;
      state.errorMessage = errorMessage;
    },
    logout: (state, action) => {
      localStorage.removeItem("appLogin");
      state.isLogin = false;
    },
  },
});
export const { startLoading, loginSuccess, loginFail, logout } =
  authSlice.actions;

export default authSlice.reducer;
