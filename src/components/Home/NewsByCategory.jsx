import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterNewsData } from '../../redux/slice/FilterNewsByCategory';
import { Link, useParams } from 'react-router-dom';
import { fetchAllNewsData } from '../../redux/slice/AllNewsDataSlice';
import NewsCard from './NewsCard';
import AllNews from './AllNews';

const NewsByCategory = ({handleFilter,button}) => {

//   const button = [
//     "National News",
//     "Breaking News",
//     "Regular News",
//     "International News",
//     "Sports",
//     "Entertainment",
//     "Culture",
//     "Arts"
//   ]
  
//   const [filterData,setFilter] = useState([])
//   console.log(filterData);
  
// const allData = useSelector((state) => state.newsData.newsData)
// const dispatch = useDispatch()
// useEffect(()=>{
// dispatch(fetchAllNewsData())
// },[])

// const handleFilter = (category)=>{
//    const filter = allData.filter((data)=> data.category === category)
//    setFilter(filter)

// }
  return (
    <div>
     {
       button.map((category,i)=> (
         <ul key={i}>
          <Link >  <li onClick={()=> handleFilter(category)}>{category}</li></Link>
        </ul>
      ))
     }
     
    </div>
  );
};

export default NewsByCategory;