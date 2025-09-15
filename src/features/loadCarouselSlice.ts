import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoadCarouselState {
  isLoading: boolean;
  index: number;
  duration: number; // in milliseconds
}

const initialState: LoadCarouselState = {
  isLoading: false,
  index: 0,
  duration: 2500,
};

const loadCarouselSlice = createSlice({
  name: "loadCarousel",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.index = 0;
    },
    stopLoading: (state) => {
      state.isLoading = false;
      state.index = 0;
    },
    nextIndex: (state) => {
      state.index = (state.index + 1) % 4; // Assuming 4 steps in the carousel
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const { startLoading, stopLoading, nextIndex, setDuration } =
  loadCarouselSlice.actions;

export default loadCarouselSlice.reducer;
