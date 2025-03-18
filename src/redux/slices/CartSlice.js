import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
      state.totalQuantity++;
      state.totalPrice += item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        item.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice -= item.price;
    },
    removeItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
