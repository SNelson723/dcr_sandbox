import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Field } from "../types";

export interface FieldState {
  fields: Field[];
};

const initialState: FieldState = {
  fields: [],
};

const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    setFields(state, action: PayloadAction<Field[]>) {
      state.fields = action.payload;
    },
  },
});

export const { setFields } = fieldSlice.actions;
export default fieldSlice.reducer;