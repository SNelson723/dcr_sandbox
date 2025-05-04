import { configureStore } from "@reduxjs/toolkit";

// import slice reducers here
import appReducer from "../features/appSlice";
import fieldReducer from "../features/fieldSlice";
import tableReducer from "../features/tableSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    field: fieldReducer,
    table: tableReducer,
  }
});

// the current state tree is inferred from the store itself
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch is the type of the dispatch function
export type AppDispatch = typeof store.dispatch;