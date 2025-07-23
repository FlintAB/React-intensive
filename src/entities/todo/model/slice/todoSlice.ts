import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../types";

const todoAdapter = createEntityAdapter<Todo>({
   sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const todoSlice = createSlice({
   name: 'todos',
   initialState: todoAdapter.getInitialState(),
   reducers: {}
});

export const todoSelectors = todoAdapter.getSelectors();

export const todoReducer = todoSlice.reducer;