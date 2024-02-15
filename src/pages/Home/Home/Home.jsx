import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Header from '../../../components/Home/Header';

import AllNews from '../../../components/Home/AllNews';
import NewsByCategory from '../../../components/Home/NewsByCategory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNewsData } from '../../../redux/slice/AllNewsDataSlice';

const Home = () => {
  const button = [
    "National News",
    "Breaking News",
    "Regular News",
    "International News",
    "Sports",
    "Entertainment",
    "Culture",
    "Arts"
  ]
  
  const [filterData,setFilter] = useState([])
  console.log(filterData);
  
const allData = useSelector((state) => state.newsData.newsData)
const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchAllNewsData())
},[])

const handleFilter = (category)=>{
   const filter = allData.filter((data)=> data.category === category)
   setFilter(filter)

}
  return (
    <div className='my-container px-4'>
      <Header />
      <Navbar />
     <div className='grid grid-cols-6 gap-4'>
      <div>
    <NewsByCategory  handleFilter={handleFilter} button={button}/>
      </div>
      <div className='col-start-2 col-span-4'>
        <AllNews filterData={filterData} allData={allData}/>
      </div>
      <div>sdfasdfa</div>
     </div>
    </div>
  );
};

export default Home;