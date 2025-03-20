import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const UserOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState();
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-order-history",
        { headers }
      );
      setOrderHistory(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {!orderHistory && (
        <div className='flex items-center justify-center h-full'>
          <Loader />
        </div>
      )}
      {orderHistory && orderHistory.length === 0 && (
        <div className='h-[80vh] p-4 text-gray-800'>
          <div className='h-full flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-semibold text-gray-500 mb-8'>
              No Order History
            </h1>
            <img
              src='https://cdn-icons-png.flaticon.com/128/9961/9961218.png'
              alt='No orders'
              className='h-[20vh] mb-8'
            />
          </div>
        </div>
      )}
      {orderHistory && orderHistory.length > 0 && (
        <div className='h-full p-4 text-gray-800'>
          <h1 className='text-3xl md:text-5xl font-semibold text-gray-500 mb-8'>
            Your Order History
          </h1>
          <div className='mt-4 bg-gray-100 w-full rounded py-2 px-4 flex gap-4 shadow-md'>
            <div className='w-[3%] text-center'>Sr.</div>
            <div className='w-[22%]'>Products</div>
            <div className='w-[45%]'>Description</div>
            <div className='w-[9%]'>Price</div>
            <div className='w-[16%]'>Status</div>
            <div className='w-none md:w-[5%] hidden md:block'>Mode</div>
          </div>
          {orderHistory.map((items, i) => (
            <div
              key={i}
              className='bg-gray-100 w-full rounded py-2 px-4 flex gap-4 hover:bg-gray-200 cursor-pointer shadow-sm'
            >
              <div className='w-[3%] text-center'>{i + 1}</div>
              <div className='w-[22%]'>
                <Link
                  to={`/view-book-details/${items.product._id}`}
                  className='text-blue-500 hover:underline'
                >
                  {items.product.title}
                </Link>
              </div>
              <div className='w-[45%]'>{items.product.desc.slice(0, 50)}...</div>
              <div className='w-[9%]'>₹{items.product.price}</div>
              <div className='w-[16%] font-semibold'>
                {items.status === 'Order Placed' ? (
                  <span className='text-yellow-500'>{items.status}</span>
                ) : items.status === 'Canceled' ? (
                  <span className='text-red-500'>{items.status}</span>
                ) : (
                  <span className='text-green-500'>{items.status}</span>
                )}
              </div>
              <div className='w-none md:w-[5%] hidden md:block text-gray-600'>COD</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserOrderHistory;
