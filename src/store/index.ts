import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/appSlice";
import fieldReducer from "../features/fieldSlice";
import tableReducer from "../features/tableSlice";
import hourlyReducer from "../features/hourlySlice";
import chartReducer from "../features/chartSlice";
import contextMenuReducer from "../features/contextMenuSlice";
import testingReducer from "../features/testingSlice";
import loadCarouselReducer from "../features/loadCarouselSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    field: fieldReducer,
    table: tableReducer,
    hourly: hourlyReducer,
    chart: chartReducer,
    context: contextMenuReducer,
    testing: testingReducer,
    loadCarousel: loadCarouselReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
