import { configureStore } from "@reduxjs/toolkit";
import persistReducers from "../slices/mainSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const config = {
  key: "root",
  storage,
};

const persistence = persistReducer(config, persistReducers);

export const store = configureStore({
  reducer: {
    persist: persistence,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
