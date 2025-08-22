import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Position = { x: number; y: number } | null;

interface ContextMenuState {
  menuPosition: Position;
}

const initialState: ContextMenuState = {
  menuPosition: null,
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setMenuPosition: (state, action: PayloadAction<Position>) => {
      state.menuPosition = action.payload;
    },
  },
});

export const { setMenuPosition } = contextMenuSlice.actions;

export default contextMenuSlice.reducer;
