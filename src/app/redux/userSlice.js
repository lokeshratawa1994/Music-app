"use client";
import { createSlice } from "@reduxjs/toolkit";
import { playListData } from "../data";

const initialState = {
  userData: playListData,
  loading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSongData: (state, action) => {
      state.userData = [...state.userData,action.payload];
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addSongData, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;