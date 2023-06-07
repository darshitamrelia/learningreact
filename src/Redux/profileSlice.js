import { createSlice } from "@reduxjs/toolkit";
import img1 from "../Image 1.jpg";
import img2 from "../Image 2.jpg";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "Darshit",
    Address: "Surat",
    Image: img1,
  },
  reducers: {
    changeName: (state) => {
      state.name = "Prem";
    },
    ChangeImage: (state) => {
      state.Image = img2;
    },
  },
});

export const { changeName, ChangeImage } = profileSlice.actions;
export default profileSlice.reducer;
