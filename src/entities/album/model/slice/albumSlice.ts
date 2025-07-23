import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Album } from "../../../../shared/types/album";

const albumAdapter = createEntityAdapter<Album>({
   sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const albumSlice = createSlice({
   name: 'albums',
   initialState: albumAdapter.getInitialState(),
   reducers: {},
})

export const albumSelectors = albumAdapter.getSelectors();

export const albumReducer = albumSlice.reducer;