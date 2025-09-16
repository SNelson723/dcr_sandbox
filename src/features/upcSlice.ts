import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UpcDaily = {
  Friday: number;
  Monday: number;
  Saturday: number;
  Sunday: number;
  Thursday: number;
  Tuesday: number;
  Wednesday: number;
  description: string;
  product_code: string;
  week: string;
};

interface UpcState {
  daily: UpcDaily[];
  allUpcs: string[];
  selectedUpcs: string[];
  currentUpc: string;
}

const initialState: UpcState = {
  daily: [],
  allUpcs: [],
  selectedUpcs: [],
  currentUpc: "",
};

const upcSlice = createSlice({
  name: "upc",
  initialState,
  reducers: {
    setDailyData: (state, action: PayloadAction<UpcDaily[]>) => {
      state.daily = action.payload;
    },
    setAllUpcs: (state, action: PayloadAction<string[]>) => {
      state.allUpcs = action.payload;
    },
    setSelectedUpcs: (state, action: PayloadAction<string>) => {
      if (!state.selectedUpcs.includes(action.payload)) {
        state.selectedUpcs.push(action.payload);
      } else {
        state.selectedUpcs = state.selectedUpcs.filter(
          (u) => u !== action.payload
        );
      }
    },
    setCurrentUpc: (state, action: PayloadAction<string>) => {
      state.currentUpc = action.payload;
    },
    clearData: (state) => {
      state.daily = [];
      state.allUpcs = [];
      state.selectedUpcs = [];
      state.currentUpc = "";
    },
  },
});

export const {
  setDailyData,
  clearData,
  setAllUpcs,
  setSelectedUpcs,
  setCurrentUpc,
} = upcSlice.actions;

export default upcSlice.reducer;
