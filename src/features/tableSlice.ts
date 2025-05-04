import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Table, TableInfo } from '../types';

export interface TableState {
  tables: Table[];
  tableInfo: TableInfo[];
};

const initialState: TableState = {
  tables: [],
  tableInfo: [],
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTables(state, action: PayloadAction<Table[]>) {
      state.tables = action.payload;
    },
    setTableInfo(state, action: PayloadAction<TableInfo[]>) {
      state.tableInfo = action.payload;
    },
  },
});

export const { setTables, setTableInfo} = tableSlice.actions;
export default tableSlice.reducer;