import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const News = () => {
    const filterData = useSelector((state)=> state.filterNews.filterData)
  console.log(filterData);
  const params = useParams()
  console.log(params);
  useEffect(()=>{
    dispatch(fetchFilterNewsData())
  },[])
  return (
    <div>
      News
    </div>
  );
};

export default News;