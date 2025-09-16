import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  url: string;
  quickSightUrl: string;
  awsUrl: string;
  carouselTitle: string;
  date: string;
  selectedHour: string;
  devUrl: string;
  arn: string;
  embedUrl: string;
  api_key: string;
  email: string;
}

const initialState: AppState = {
  url: "https://localhost:44324/api/",
  quickSightUrl: "http://localhost:5005/Prod/",
  awsUrl: "http://127.0.0.1:8001/",
  carouselTitle: "",
  date: "5/9/2025",
  selectedHour: "15",
  devUrl: "http://localhost:5005/Prod/",
  arn: "arn:aws:quicksight:us-east-2:747273370721:user/default/stephen",
  embedUrl: "",
  api_key: "12FE9864SBX50W79",
  email: "snelson@dcrpos.com",
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
    setEmbedUrl: (state, action: PayloadAction<string>) => {
      state.embedUrl = action.payload;
    },
  },
});

export const { setUrl, setCarouselTitle, setEmbedUrl } = appSlice.actions;
export default appSlice.reducer;
