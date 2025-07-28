import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  url: string;
  awsUrl: string;
  carouselTitle: string;
  date: string;
  selectedHour: string;
  devUrl: string;
}

const initialState: AppState = {
  url: "https://localhost:44324/api/",
  awsUrl: "http://127.0.0.1:8001/",
  carouselTitle: "",
  date: "5/9/2025",
  selectedHour: "15",
  devUrl: "http://localhost:5005/Prod/",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setCarouselTitle: (state, action: PayloadAction<string>) => {
      state.carouselTitle = action.payload;
    },
  },
});

export const { setUrl, setCarouselTitle } = appSlice.actions;
export default appSlice.reducer;
