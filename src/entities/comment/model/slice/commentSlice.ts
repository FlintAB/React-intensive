import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Comment } from "../types";

const commentAdapter = createEntityAdapter<Comment>({
   sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const commentSlice = createSlice({
   name: 'comments',
   initialState: commentAdapter.getInitialState(),
   reducers: {}
});

export const commentSelector = commentAdapter.getSelectors();

export const commentReducer = commentSlice.reducer;