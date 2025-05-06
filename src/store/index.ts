import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/appSlice";
import fieldReducer from "../features/fieldSlice";
import tableReducer from "../features/tableSlice";
import hourlyReducer from "../features/hourlySlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    field: fieldReducer,
    table: tableReducer,
    hourly: hourlyReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;