import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader/Loader';

const AllOrders = () => {
  const [AllOrders, setAllOrders] = useState()
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/get-all-orders",
        { headers }
      )
      alert(response.data.data)
    }
    fetch()
  }, [])
  return (
    <>
      {AllOrders && <div className='h-[100%] flex items-center justify-center'>
        {" "}
        <Loader />{" "}
      </div>
      }

      {AllOrders && AllOrders.length > 0 && (
        <div className='h-[100%] p-0 md:text-5xl font-semibold text-zinc-500 mb-8'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
            All Orders
          </h1>
          <div className='mt-4 bg-gray-100 w-full rounded py-2 px-4 flex gap-4 shadow-md'>
            <div className='w-[3%]'>
              <h1 className='text-center'> Sr.</h1>
            </div>
            <div className='w-[22%] md:w-[22%]'>
              <h1 className=''>Products</h1>
            </div>
            <div className='w-[45%] md:w-[40%] hidden md:block'>
              <h1 className=''>Description</h1></div>
            <div className=' w-[17%] md:w-[9%]'>
              <h1>  Price </h1></div>
            <div className='w-[30%] md:w-[16%]'>
              <h1>Status</h1></div>
            <div className='w-none md:w-[5%] hidden md:block'>Mode</div>
          </div>
          {AllOrders &&
          AllOrders.map((items, i) => {
            <div className='bg-zinc-300 w-fullrounded py-2 px-3 flex gap-2 hover:bg-zinc-400 hover:cursor-pointer transition-all duration-300'>
              <div className='w-[3%]'>
              <h1 className='text-center'>{i+1}</h1>
              </div>
            </div>
          })}
        </div>
      )}
    </>
  )
}

export default AllOrders
