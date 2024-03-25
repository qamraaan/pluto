import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./baseQuery";
import { rtkQueryErrorLogger } from "./middleware";
import authSlice from "../slices/authSlice";
import userSlice from "../domains/users/slices/userSlice";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authSlice,
  userSlice,
});

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({ serializableCheck: false }).concat(
      baseApi.middleware,
      rtkQueryErrorLogger
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
