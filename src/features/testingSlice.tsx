import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Record = {
  name: string;
  status: string;
  user: string;
};

interface TestingState {
  selectedRecord: Record | null;
}

const initialState: TestingState = {
  selectedRecord: null,
};

const testingSlice = createSlice({
  name: "testing",
  initialState,
  reducers: {
    setSelectedRecord(state, action: PayloadAction<Record | null>) {
      state.selectedRecord = action.payload;
    },
  },
});

export const { setSelectedRecord } = testingSlice.actions;

export default testingSlice.reducer;
