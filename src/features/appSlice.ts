import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  url: string;
  carouselTitle: string;
  date: string;
  selectedHour: string;
};

const initialState: AppState = {
  url: "https://localhost:44324/api/",
  carouselTitle: "",
  date: "5/9/2025",
  selectedHour: "15",
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setCarouselTitle: (state, action: PayloadAction<string>) => {
      state.carouselTitle = action.payload;
    }
  },
});

export const { setUrl, setCarouselTitle } = appSlice.actions;
export default appSlice.reducer;