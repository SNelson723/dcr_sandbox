import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  HourlyDept,
  HourlySubDept,
  HourlyCat,
  HourlyItem,
  HourlyTender,
} from "../types";

export interface HourlyState {
  depts: HourlyDept[];
  subdepts: HourlySubDept[];
  cats: HourlyCat[];
  topItems: HourlyItem[];
  bottomItems: HourlyItem[];
  tenders: HourlyTender[];
}

const initialState: HourlyState = {
  depts: [],
  subdepts: [],
  cats: [],
  topItems: [],
  bottomItems: [],
  tenders: [],
};

const hourlySlice = createSlice({
  name: "hourly",
  initialState,
  reducers: {
    setDepts: (state, action: PayloadAction<HourlyDept[]>) => {
      state.depts = action.payload;
    },
    setSubDepts: (state, action: PayloadAction<HourlySubDept[]>) => {
      state.subdepts = action.payload;
    },
    setCats: (state, action: PayloadAction<HourlyCat[]>) => {
      state.cats = action.payload;
    },
    setTopItems: (state, action: PayloadAction<HourlyItem[]>) => {
      state.topItems = action.payload;
    },
    setBottomItems: (state, action: PayloadAction<HourlyItem[]>) => {
      state.bottomItems = action.payload;
    },
    setTenders: (state, action: PayloadAction<HourlyTender[]>) => {
      state.tenders = action.payload;
    },
  },
});

export const {
  setDepts,
  setSubDepts,
  setCats,
  setTopItems,
  setBottomItems,
  setTenders,
} = hourlySlice.actions;
export default hourlySlice.reducer;
