import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { IoRestaurantSharp } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';

const ViewBookDetails = () => {
  const { id } = useParams()
  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/get-product-by-id/${id}`
        );
        // console.log(response);
        setData(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
    productid: id,
  };

  const handleFavourite = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/v1/add-product-to-favourite",
        {},
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error adding to favourites:", error.response);
      alert(error.response.data.message || "An error occurred");
    }
  };
  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:3000/api/v1/add-to-cart",
      {},
      { headers }
    )
    alert(response.data.message);
  }

  const deleteProduct = async () => {
    const response = await axios.delete("http://localhost:3000/api/v1/delete-product",
      { headers }
    )
    alert(response.data.message)
    navigate("/Products")
  }
  return (
    <>
      {Data && (
        <div className='px-12 md:px-12 py-8 bg-zinc-100 h-auto flex flex-col lg:flex-row'>
          <div className='px-4 w-full lg:w-3/6'>
            <div className='flex lg:flex-row flex-col justify-around bg-zinc-300 py-12 rounded'>
              <img
                src={Data.Url}
                alt='food cover'
                className='h-[50vh] md:h[60vh] lg:h-[70vh] rounded'
              />
              {isLoggedIn === true && role === 'receiver' && (
                <div className='flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0'>
                  <button
                    className='bg-white rounded lg:rounded-full text-3xl p-3 mt-4 text-red-500 flex item-center justify-center 
                      hover:bg-blue-500 hover:text-white'
                    onClick={handleFavourite}
                  >
                    <FaHeart />
                    <span className='ms-4 block lg:hidden'>Favourites</span>
                  </button>
                  <button className='text-white bg-blue-100 rounded lg:rounded-full text-3xl p-3 mt-8 md:mt-0 lg:mt-8 bg-blue-500 flex item-center justify-center'
                    onClick={handleCart}
                  >
                    <FaShoppingCart />
                    <span className='ms-4 block lg:hidden'>Add to Cart</span>
                  </button>
                </div>
              )}

              {isLoggedIn === true && role === 'donater' && (
                <div className='flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0'>
                  <Link
                    to={`/updateProducts/${id}`}
                    className='bg-white rounded lg:rounded-full text-3xl p-3 mt-4 text-black flex items-center justify-center'>
                    <FaEdit />
                    <span className='ms-4 block lg:hidden'>Edit Product</span>
                  </Link>

                  <button className='text-red-500 bg-blue-100 rounded lg:rounded-full text-3xl p-3 lg:mt-8 md:mt-0 mt-4 flex item-center justify-center hover:bg-red-500 hover:text-white'
                    onClick={deleteProduct}>
                    <MdOutlineDelete />
                    <span className='ms-4 block lg:hidden' >Remove Product</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='p-4 w-full lg:w-3/6'>
            <h1 className='text-x4l text-zinc-900 font-semibold px-10'>{Data.pname}</h1>
            <p className='text-zinc-400 mt-1 px-10'>Price: ₹{Data.price}</p>
            <h1 className='text-x4l text-zinc-400 px-10'>Quantity : {Data.quantity} Plates</h1>
            <p className='text-zinc-500 mt-4 px-10 text-xl'>{Data.desc}</p>
            <p className='flex mt-4 items-center px-10 justify-start text-zinc-400'>
              <IoRestaurantSharp className="mr-2" /> {Data.company}
            </p>
            <p className='mt-4 px-10 text-zinc-900 text-3xl font-semibold'>
              {Data.rating}/5
            </p>
          </div>
        </div>
      )}
      {!Data && (
        <div className='h-screen bg-zinc-900 items-center justify-center'>
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
