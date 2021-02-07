import { createSlice } from "@reduxjs/toolkit";
import commerce from "utils/lib/commerce";

const newCart = commerce.cart.retrieve().then((cart) => cart.id);

const initialState = {
  items: [],
  cartId: newCart,
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      const item = state.items.find((pizza) => pizza.name === payload.name);

      if (item) {
        state.items = state.items.map((pizza) =>
          pizza.name === payload.name
            ? {
                ...pizza,
                quantity: pizza.quantity + payload.quantity,
              }
            : pizza
        );
      } else {
        state.items.push(payload);
      }
    },
    removeFromBasket: (state, { payload }) => {
      state.items = state.items.filter((item) => item.name !== payload);
    },
    increaseQuantity: (state, { payload }) => {
      state.items = state.items.filter((item) =>
        item.name === payload
          ? {
              ...item,
              quantity: item.quantity++,
            }
          : item
      );
    },
    decreaseQuantity: (state, { payload }) => {
      if (payload.quantity === 1) {
        state.items = state.items.filter((item) => item.name !== payload.name);
      }
      state.items = state.items.filter((item) =>
        item.name === payload.name
          ? {
              ...item,
              quantity: item.quantity--,
            }
          : item
      );
    },
    checkOut: (state, { payload }) => {
      payload.forEach((item) => {
        commerce.cart
          .add(item.id, item.quantity)
          .then((json) => json)
          .catch((err) => console.log(`Error checking out: ${err}`));
      });
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  checkOut,
} = basket.actions;
export const basketItems = (state) => state.basket.items;
export const cartId = (state) => state.basket.cartId;

export default basket.reducer;
