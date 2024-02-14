import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNewsData } from '../../redux/slice/AllNewsDataSlice';
import NewsCard from './NewsCard';

const AllNews = () => {
    const allData = useSelector((state) => state.newsData.newsData)
    console.log(allData);
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAllNewsData())
    },[])
  return (
    <div className=''>
      {
        allData.map((data)=> <NewsCard data={data} key={data.id} />)
      }
    </div>
  );
};

export default AllNews;