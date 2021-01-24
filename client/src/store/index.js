import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import user from "./slices/user";

const reducer = {
  user: user,
};

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
