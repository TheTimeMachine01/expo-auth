import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";

// Define the State Type (simplified)
type RootState = {
  auth: {
    token: string | null; // JWT token type
  };
};

// Define the Dispatch Type
type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Export the types for better usage
export type { RootState, AppDispatch };
