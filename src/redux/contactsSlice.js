import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  redusers: {},
});

export const contactsReduser = slice.reducer;
