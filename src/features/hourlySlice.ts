import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  HourlyDept,
  HourlySubDept,
  HourlyCat,
  HourlyItem,
  HourlyTender,
  DeptItem,
} from "../types";

export interface HourlyState {
  depts: HourlyDept[];
  subdepts: HourlySubDept[];
  cats: HourlyCat[];
  topItems: HourlyItem[];
  bottomItems: HourlyItem[];
  tenders: HourlyTender[];
  showPortal: boolean;
  deptItems: DeptItem[];
  selectedDept: string;
  selectedSubDept: string;
  portalTitle: string;
  portalType: string;
  selectedF1034: string;
}

const initialState: HourlyState = {
  depts: [],
  subdepts: [],
  cats: [],
  topItems: [],
  bottomItems: [],
  tenders: [],
  showPortal: false,
  deptItems: [],
  selectedDept: "",
  selectedSubDept: "",
  portalTitle: "",
  portalType: "",
  selectedF1034: "2",
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
    setShowPortal: (state, action: PayloadAction<boolean>) => {
      state.showPortal = action.payload;
    },
    setDeptItems: (state, action: PayloadAction<DeptItem[]>) => {
      state.deptItems = action.payload;
    },
    setSelectedDept: (state, action: PayloadAction<string>) => {
      state.selectedDept = action.payload;
    },
    setSelectedSubDept: (state, action: PayloadAction<string>) => {
      state.selectedSubDept = action.payload;
    },
    setPortalTitle: (state, action: PayloadAction<string>) => {
      state.portalTitle = action.payload;
    },
    setPortalType: (state, action: PayloadAction<string>) => {
      state.portalType = action.payload;
    },
    setSelectedF1034: (state, action: PayloadAction<string>) => {
      state.selectedF1034 = action.payload;
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
  setShowPortal,
  setDeptItems,
  setSelectedDept,
  setSelectedSubDept,
  setPortalTitle,
  setPortalType,
  setSelectedF1034,
} = hourlySlice.actions;
export default hourlySlice.reducer;
