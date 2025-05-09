import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Table, TableInfo } from "../types";

export interface TableState {
  tables: Table[];
  tableInfo: TableInfo[];
  tableScore: number;
}

const initialState: TableState = {
  tables: [],
  tableInfo: [],
  tableScore: 0,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTables(state, action: PayloadAction<Table[]>) {
      state.tables = action.payload;
    },
    setTableInfo(state, action: PayloadAction<TableInfo[]>) {
      state.tableInfo = action.payload;
    },
    setTableScore(state, action: PayloadAction<number>) {
      state.tableScore = action.payload;
    },
    resetTableScore(state) {
      state.tableScore = 0;
    },
  },
});

export const { setTables, setTableInfo, setTableScore, resetTableScore } =
  tableSlice.actions;
export default tableSlice.reducer;
