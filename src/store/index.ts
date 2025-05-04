import { configureStore } from "@reduxjs/toolkit";

// import slice reducers here

export const store = configureStore({
  reducer: {

  }
});

// the current state tree is inferred from the store itself
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch is the type of the dispatch function
export type AppDispatch = typeof store.dispatch;