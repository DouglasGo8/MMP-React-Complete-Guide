import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const cartItem = action.payload;
      const itemExisting = state.items.find((item) => item.id === cartItem.id);
      state.totalQuantity++;
      /**
       * Redux toolkit ensure that
       * push will not manipulate the
       * existent state insied the array items
       * in other words, Redux Toolkit ensures
       * that array will be manipulated in a immutable way
       */
      if (!itemExisting) {
        state.items.push({
          id: cartItem.id,
          price: cartItem.price,
          quantity: 1,
          totalPrice: cartItem.price,
          name: cartItem.title,
        });
      } else {
        itemExisting.quantity++;
        itemExisting.totalPrice = itemExisting.totalPrice + cartItem.totalPrice;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const itemExisting = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (itemExisting.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        itemExisting.quantity--;
        //itemExisting.totalPrice = itemExisting.totalPrice - itemExisting.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;