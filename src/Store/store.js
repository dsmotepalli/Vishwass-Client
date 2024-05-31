import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { commonSlice } from "./Slices/commonSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["Common", "User", "Location"],
};
const reducers = combineReducers({
  Common: commonSlice.reducer,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistReducers,
  devTools: process.env.REACT_APP_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
