import React, { useEffect, useState } from 'react';
import {
   MagnifyingGlassIcon,
   HeartIcon,
   ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Navbar = () => {
   const [navTrigger, setNavTrigger] = useState(false);

   const onScrollNavBehaviour = () => {
      if (window.scrollY > 30) {
         setNavTrigger(true);
      } else {
         setNavTrigger(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', onScrollNavBehaviour);

      return () => {
         window.removeEventListener('scroll', onScrollNavBehaviour);
      };
   }, []);

   return (
      <div>
         <header
            className={
               !navTrigger
                  ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
                  : 'fixed op-0 left-0 right-0 h-[7vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }
         >
            <nav className='flex items-center justify-between nike-container'>
               {/* Logo div */}
               <div className='flex items-center'>
                  <img
                     src={logo}
                     alt='logo/img'
                     className={`w-16 h-auto ${
                        navTrigger && 'filter brightness-0'
                     }`}
                  />
               </div>
               {/* Bullets */}
               <ul className='flex items-center justify-center gap-2'>
                  <li className='grid items-center'>
                     <MagnifyingGlassIcon
                        className={`icon-style hover:scale-110 ${
                           navTrigger &&
                           'text-slate-900 transition-all duration-300'
                        }`}
                     />
                  </li>
                  <li className='grid items-center'>
                     <HeartIcon
                        className={`icon-style hover:scale-110 ${
                           navTrigger &&
                           'text-slate-900 transition-all duration-300'
                        }`}
                     />
                  </li>
                  <li className='grid items-center'>
                     <button
                        type='button'
                        className='border-none outline-none active:scale-110 transition-all duration-300 relative'
                     >
                        <ShoppingBagIcon
                           className={`icon-style hover:scale-110 ${
                              navTrigger &&
                              'text-slate-900 transition-all duration-300'
                           }`}
                        />
                        <div
                           className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] hover:scale-105 leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                              navTrigger
                                 ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                                 : 'bg-slate-100 text-slate-900 shadow-slate-100'
                           }`}
                        >
                           0
                        </div>
                     </button>
                  </li>
               </ul>
            </nav>
         </header>
      </div>
   );
};

export default Navbar;
