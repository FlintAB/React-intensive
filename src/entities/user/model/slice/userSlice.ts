import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { User } from "../types";

const userAdapter = createEntityAdapter<User>({
   sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const userSlice = createSlice({
   name: "users",
   initialState: userAdapter.getInitialState(),
   reducers: {},
});

export const userSelectors = userAdapter.getSelectors();

export const userReducer = userSlice.reducer;