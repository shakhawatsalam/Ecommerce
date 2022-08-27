import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <div>
        <h2 className='products-heading'>Best Selling Productsd</h2>
        <p>Speakers of many variations</p>
      </div>


      <div>
        {['product 1', 'product 2'].map((product) => product)}
      </div>

      <FooterBanner/>
    </>
  )
}

export default Home;