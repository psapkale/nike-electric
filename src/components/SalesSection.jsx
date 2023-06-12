import React from 'react';
import Title from './utils/Title';
import ShoeCard from './utils/ShoeCard';

const SalesSection = ({ isPopular, sectionType: { title, items } }) => {
   return (
      <div className={`nike-container ${!isPopular && 'topratesales'}`}>
         <Title title={title} />
         <div
            className={`grid items-center justify-self-center gap-7 lg:gap-5 mt-7 ${
               isPopular
                  ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
                  : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
            }`}
         >
            {items?.map((item, i) => (
               <ShoeCard {...item} key={i} isPopular={isPopular} /> // 'item' is array of objects
            ))}
         </div>
      </div>
   );
};

export default SalesSection;
