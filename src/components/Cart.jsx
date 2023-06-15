import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   selectCartItems,
   selectCartState,
   selectTotalAmount,
   selectTotalQuantity,
   setCloseCart,
   setEmptyCart,
   setGetTotals,
} from '../app/CartSlice.js';
import CartCount from './cart/CartCount';
import EmptyCart from './cart/EmptyCart';
import CartItem from './cart/CartItem.jsx';

const Cart = () => {
   const dispatch = useDispatch();
   const ifCartState = useSelector(selectCartState);
   const itemsInTheCart = useSelector(selectCartItems);
   const totalAmount = useSelector(selectTotalAmount);
   const totalQuantity = useSelector(selectTotalQuantity);

   useEffect(() => {
      dispatch(setGetTotals());
   }, [itemsInTheCart, dispatch]);

   const handleCartToggle = () => {
      dispatch(
         setCloseCart({
            cartState: false,
         })
      );
   };

   const handleEmptyCart = () => {
      dispatch(setEmptyCart());
   };

   return (
      <div
         className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] transition-all duration-250 ${
            ifCartState ? 'opacity-100 visible' : 'opacity-0 invisible'
         }`}
      >
         <div
            className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 transition-all duration-300 ${
               ifCartState ? 'translate-x-0' : 'translate-x-[100vw]'
            }`}
         >
            <CartCount
               onCartToggle={handleCartToggle}
               totalQuantity={totalQuantity}
               onEmptyCart={handleEmptyCart}
            />
            {itemsInTheCart?.length === 0 ? (
               <EmptyCart onCartToggle={handleCartToggle} />
            ) : (
               <div>
                  <div className='flex flex-col items-start justify-start gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3'>
                     {itemsInTheCart?.map((item, i) => (
                        <CartItem key={i} item={item} />
                     ))}
                  </div>

                  <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
                     <div className='flex items-center justify-between'>
                        <h1 className='text-base font-semibold uppercase'>
                           Subtotal
                        </h1>
                        <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>
                           ${totalAmount}
                        </h1>
                     </div>
                     <div className='grid items-center gap-2'>
                        <p className='text-sm font-medium text-center'>
                           Taxes and Shipping will be calculated at check-out
                        </p>
                        <button
                           type='button'
                           className='button-theme bg-theme-cart text-white'
                        >
                           Buy
                        </button>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Cart;
