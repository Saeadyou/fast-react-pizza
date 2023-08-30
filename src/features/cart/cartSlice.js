import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],

//   cart: [
//     {
//       pizzaId: 45,
//       name: "Mediterranean",
//       quantity: 2,
//       unitPrice: 15,
//       totalPrice: 30,
//     },
//   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => action.payload !== item.pizzaId);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.filter((item) => action.payload === item.pizzaId);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.filter((item) => action.payload === item.pizzaId);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
