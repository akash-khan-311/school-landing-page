import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";

const persistsConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistsConfig, baseApi.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
