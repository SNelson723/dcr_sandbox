import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  url: string;
  awsUrl: string;
  carouselTitle: string;
  date: string;
  selectedHour: string;
  arn: string;
  dashId: string;
  embedUrl: string;
}

const initialState: AppState = {
  url: "https://localhost:44324/api/",
  awsUrl: "http://127.0.0.1:8001/",
  carouselTitle: "",
  date: "5/9/2025",
  selectedHour: "15",
  arn: "arn:aws:quicksight:us-east-2:747273370721:user/default/stephen",
  dashId: "c93422cb-3677-4572-bbab-72b1cf2232ee",
  embedUrl: "",
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
