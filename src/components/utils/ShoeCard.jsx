import React from 'react';
import { useDispatch } from 'react-redux';
import { setATC, setOpenCart } from '../../app/CartSlice';
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';

const ShoeCard = ({
   // Objects inside 'item'
   isPopular,
   id,
   color,
   shadow,
   title,
   text,
   img,
   btn,
   rating,
   price,
}) => {
   const dispatch = useDispatch();

   const handleCartToggle = () => {
      dispatch(
         setOpenCart({
            cartState: true,
         })
      );
   };

   const onATC = () => {
      const item = { id, title, text, img, color, shadow, price };

      dispatch(setATC(item));
   };

   return (
      <>
         {/* Parent div */}
         <div
            className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
               isPopular
                  ? 'justify-items-start lg:mt-3'
                  : 'justify-items-center'
            } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
         >
            {/* Text area */}
            <div
               className={`grid items-center ${
                  isPopular ? 'justify-items-start' : 'justify-items-center'
               } `}
            >
               {/* Info text */}
               <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
                  {title}
               </h1>
               <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>
                  {text}
               </p>
               {/* Price and rating div */}
               <div className='flex items-center justify-between w-28 my-2'>
                  <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme'>
                     <h1 className='text-black text-sm font-medium'>
                        ${price}
                     </h1>
                  </div>
                  <div className='flex items-center gap-1'>
                     <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
                     <h1 className='md:text-sm font-normal text-slate-100'>
                        {rating}
                     </h1>
                  </div>
               </div>
               {/* ATC and buy button */}
               <div className='flex items-center gap-3'>
                  <button
                     type='button'
                     onClick={() => onATC()}
                     className='bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200'
                  >
                     <ShoppingBagIcon className='icon-style text-slate-900' />
                  </button>
                  <button
                     type='button'
                     onClick={() => {
                        onATC();
                        handleCartToggle();
                     }}
                     className='bg-white opacity-90 blur-effect-theme button-theme px-2 py-1 shadow shadow-slate-200 text-sm text-black'
                  >
                     {btn}
                  </button>
               </div>
            </div>

            {/* Image area */}
            <div
               className={`flex items-center ${
                  isPopular ? 'absolute top-5 right-1' : 'justify-center'
               }`}
            >
               <img
                  src={img}
                  alt={`img/item-img/${id}`}
                  className={`transitions-theme hover:-rotate-12 ${
                     isPopular
                        ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]'
                        : 'h-36 w-64'
                  }`}
               />
            </div>
         </div>
      </>
   );
};

export default ShoeCard;
