import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import user from "./slices/user";
import basket from "./slices/basket";

const reducer = {
  user: user,
  basket: basket,
};

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
