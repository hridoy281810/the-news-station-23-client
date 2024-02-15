import React from 'react';

import NewsCard from './NewsCard';


const AllNews = ({allData,filterData}) => {


  return (
    <div className=''>
    
      {
        filterData.length > 0 ? <>
           {
        filterData.map((data)=> <NewsCard data={data} key={data.id} />)
      }
        </>:<>
        {
        allData.map((data)=> <NewsCard data={data} key={data.id} />)
      }
        </>
      }
     
    </div>
  );
};

export default AllNews;