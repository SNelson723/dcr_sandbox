import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Field } from "../types";

export interface FieldState {
  fields: Field[];
  fieldScore: number;
}

const initialState: FieldState = {
  fields: [],
  fieldScore: 0,
};

const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    setFields(state, action: PayloadAction<Field[]>) {
      state.fields = action.payload;
    },
    setFieldScore(state, action: PayloadAction<number>) {
      state.fieldScore = action.payload;
    },
    resetFieldScore(state) {
      state.fieldScore = 0;
    },
  },
});

export const { setFields, setFieldScore, resetFieldScore } = fieldSlice.actions;
export default fieldSlice.reducer;
