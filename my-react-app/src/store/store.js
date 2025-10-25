import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Optional: TypeScript typings
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
