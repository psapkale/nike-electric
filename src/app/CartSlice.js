import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
   cartState: false,
   cartItems: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
   cartTotalAmount: 0,
   cartTotalQuantity: 0,
};

const CartSlice = createSlice({
   initialState,
   name: 'cart',
   reducers: {
      setOpenCart: (state, action) => {
         state.cartState = action.payload.cartState;
      },
      setCloseCart: (state, action) => {
         state.cartState = action.payload.cartState;
      },
      setATC: (state, action) => {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         if (itemIndex >= 0) {
            state.cartItems[itemIndex].quantity += 1;
            toast.success('Added one more');
         } else {
            const item = { ...action.payload, quantity: 1 };
            state.cartItems.push(item);
            // action.payload is the actual item

            toast.success(`${action.payload.title} added to cart`);
         }

         localStorage.setItem('cart', JSON.stringify(state.cartItems));
      },
      setRemoveFromCart: (state, action) => {
         // Remove the selected item from the array(state.cartItems) and assign the new array to the state.cartItems
         const excludingTheSelectedItem = state.cartItems.filter(
            (item) => item.id !== action.payload.id
         );

         state.cartItems = excludingTheSelectedItem;

         localStorage.setItem('cart', JSON.stringify(state.cartItems));

         toast.success(`${action.payload.title} removed from cart`);
      },
      setIncreaseItemQuantity: (state, action) => {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         if (itemIndex >= 0) {
            state.cartItems[itemIndex].quantity += 1;
            toast.success('Added one more');
         }

         localStorage.setItem('cart', JSON.stringify(state.cartItems));
      },
      setDecreaseItemQuantity: (state, action) => {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         if (state.cartItems[itemIndex].quantity > 1) {
            state.cartItems[itemIndex].quantity -= 1;
            toast.success('Quantity decreased');
         }

         localStorage.setItem('cart', JSON.stringify(state.cartItems));
      },
      setEmptyCart: (state, action) => {
         state.cartItems = [];
         toast.success('Cart Empty');

         localStorage.setItem('cart', JSON.stringify(state.cartItems));
      },
      setGetTotals: (state, action) => {
         let { totalAmount, totalQuantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
               const { price, quantity } = cartItem;
               const totalPrice = price * quantity;

               cartTotal.totalAmount += totalPrice;
               cartTotal.totalQuantity += quantity;

               return cartTotal;
            },
            {
               totalAmount: 0,
               totalQuantity: 0,
            }
         );
         state.cartTotalAmount = totalAmount;
         state.cartTotalQuantity = totalQuantity;
      },
   },
});

export const {
   setOpenCart,
   setCloseCart,
   setATC,
   setRemoveFromCart,
   setIncreaseItemQuantity,
   setDecreaseItemQuantity,
   setEmptyCart,
   setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
