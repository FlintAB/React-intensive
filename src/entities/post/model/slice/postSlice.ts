import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Post } from "../../../../shared/types/post";

const postAdapter = createEntityAdapter<Post>({
   sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const postSlice = createSlice({
   name: 'posts',
   initialState: postAdapter.getInitialState(),
   reducers: {},
})

export const postSelectors = postAdapter.getSelectors();

export const postReducer = postSlice.reducer;