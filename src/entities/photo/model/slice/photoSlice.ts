import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Photo } from "../../../../shared/types/photo";


const photoAdapter = createEntityAdapter<Photo>({
   sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const photoSlice = createSlice({
   name: 'photos',
   initialState: photoAdapter.getInitialState(),
   reducers: {},
})

export const photoSelectors = photoAdapter.getSelectors();

export const photoReducer = photoSlice.reducer;