import React from 'react';

import { Link, useParams } from 'react-router-dom';


const NewsByCategory = ({handleFilter,button}) => {

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