import React, { useEffect } from 'react';
import {
   Cart,
   FlexContent,
   Footer,
   Hero,
   Navbar,
   SalesSection,
   Stories,
} from './components';
import {
   heroapi,
   popularsales,
   topratesales,
   highlight,
   sneaker,
   story,
   footerAPI,
} from './data/data.js';

const App = () => {
   return (
      <>
         <Navbar />
         <Cart />
         <main className='flex flex-col gap-16 relative'>
            <Hero heroapi={heroapi} />
            <SalesSection sectionType={popularsales} isPopular />
            <FlexContent contentType={highlight} isHighlight />
            <SalesSection sectionType={topratesales} />
            <FlexContent contentType={sneaker} />
            <Stories story={story} />
         </main>
         <Footer footerApi={footerAPI} />
      </>
   );
};

export default App;
