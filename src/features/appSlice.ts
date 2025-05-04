import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  url: string;
};

const initialState: AppState = {
  url: "https://localhost:44324/api/",
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
  },
});

export const { setUrl } = appSlice.actions;
export default appSlice.reducer;