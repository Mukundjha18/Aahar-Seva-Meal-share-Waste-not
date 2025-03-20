import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

const RecentlyAdded = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/get-recent-products");
      setData(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className='mt-8 px-4'>
      <h4 className='text-3xl text-yellow-100'>Recently Added Products</h4>
        {!Data && (
          <div className='flex item-center justify-center my-8'> 
            <Loader />
          </div>
          )}
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8'>
        {Data && 
        Data.map((items, i) => (
          <div key={i}>
            <ProductCard data={items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
