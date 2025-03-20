import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

const Favourite = () => {
  const [FavouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const headers = {
          id: localStorage.getItem('id'),
          authorization: `Bearer ${localStorage.getItem('token')}`,
        };
        const response = await axios.get(
          "http://localhost:3000/api/v1/get-favourite-products",
          { headers }
        );
        setFavouriteProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching favourite products:", error);
      }
    };
    fetch();
  }, [FavouriteProducts]);

  return (
    <div className='bg-white min-h-screen p-6'>
      {FavouriteProducts && FavouriteProducts.length === 0 && (
        <div className='text-5xl font-semibold text-gray-600 flex flex-col items-center justify-center w-full'>
          No Products in Favourites
          <img src='' alt='//' className='h-[20vh] my-8' />
        </div>
      )}
      <div className='grid grid-cols-4 gap-6'>
        {FavouriteProducts &&
          FavouriteProducts.map((items, i) => (
            <div key={i} className='bg-white shadow-lg rounded-lg p-4'>
              <ProductCard data={items} favourite={true} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favourite;
