import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Mobilenav = () => {
  const role = useSelector((state) => state.auth.role);

  return (
    <>
      {role === "receiver" && (
        <div className='w-full lg:hidden flex items-center justify-between mt-4 space-x-4 bg-white p-4 rounded-lg shadow'>
          <Link 
            to="/profile"
            className='text-gray-800 font-semibold text-center hover:bg-gray-200 rounded transition-all duration-300 px-4 py-2'
          >
            Favourites
          </Link>
          <Link 
            to="/profile/orderHistory"
            className='text-gray-800 font-semibold text-center hover:bg-gray-200 rounded transition-all duration-300 px-4 py-2'
          >
            Order History
          </Link>
          <Link 
            to="/profile/settings"
            className='text-gray-800 font-semibold text-center hover:bg-gray-200 rounded transition-all duration-300 px-4 py-2'
          >
            Settings
          </Link>
        </div>
      )}
      {role === "donator" && (
        <div className='w-full lg:hidden flex items-center justify-between mt-4 space-x-4 bg-white p-4 rounded-lg shadow'>
          <Link 
            to="/profile"
            className='text-gray-800 font-semibold text-center hover:bg-gray-200 rounded transition-all duration-300 px-4 py-2'
          >
            All Orders
          </Link>
          <Link 
            to="/profile/add-product"
            className='text-gray-800 font-semibold text-center hover:bg-gray-200 rounded transition-all duration-300 px-4 py-2'
          >
            Adding Books
          </Link>
        </div>
      )}
    </>
  );
};

export default Mobilenav;