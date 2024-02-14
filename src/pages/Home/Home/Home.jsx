import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Header from '../../../components/Home/Header';

import NewsCard from '../../../components/Home/NewsCard';
import AllNews from '../../../components/Home/AllNews';

const Home = () => {
  return (
    <div className='my-container px-4'>
      <Header />
      <Navbar />
     <h1>This is home</h1>
     <div className='grid grid-cols-6 gap-4'>
      <div>aishdfia</div>
      <div className='col-start-2 col-span-4'>
        <AllNews />
      </div>
      <div>sdfasdfa</div>
     </div>
    </div>
  );
};

export default Home;