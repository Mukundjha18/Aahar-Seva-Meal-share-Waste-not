import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [Total, setTotal] = useState(0);

  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/get-user-cart', { headers });
        setCart(res.data.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  const deleteProduct = async (productid) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/remove-from-cart/${productid}`,
        {},
        { headers }
      );
      alert(response.data.message);
      setCart(cart.filter(item => item._id !== productid));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(total);
  }, [cart]);

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/place-order',
        { order: cart },
        { headers }
      );
      alert(response.data.message);
      navigate('/profile/orderHistory');
    } catch (error) {
      console.error("Order placement failed:", error);
    }
  };

  return (
    <div className='bg-white px-12 h-screen py-8'>
      {!cart.length && <Loader />}

      {cart.length === 0 && (
        <div className='h-screen flex items-center justify-center flex-col'>
          <h3 className='text-5xl lg:text-6xl font-semibold text-gray-500'>Empty Cart</h3>
          <img src="path/to/your/image.jpg" alt="Empty Cart" className='lg:h-[50vh] mt-4' />
        </div>
      )}

      {cart.length > 0 && (
        <>
          <h1 className='text-5xl font-semibold text-gray-700 mb-8'>Your Cart</h1>
          
          {cart.map((item, i) => (
            <div
              className='w-full my-4 rounded-lg flex flex-col md:flex-row p-4 bg-gray-100 shadow-md'
              key={i}
            >
              <img src={item.Url} alt="Product" className='h-[20vh] md:h-[10vh] object-cover rounded-md' />
              
              <div className='w-full md:w-auto px-4'>
                <h1 className='text-2xl text-gray-900 font-semibold'>{item.pname}</h1>
                <p className='text-gray-600 mt-2 hidden lg:block'>{item.desc.slice(0, 100)}...</p>
                <p className='text-gray-600 mt-2 hidden md:block lg:hidden'>{item.desc.slice(0, 65)}...</p>
                <p className='text-gray-600 mt-2 lg:hidden block'>{item.desc.slice(0, 100)}...</p>
              </div>

              <div className='flex mt-4 w-full md:w-auto items-center justify-between px-4'>
                <h2 className='text-gray-900 text-3xl font-semibold'>₹{item.price}</h2>
                <button 
                  className='bg-red-500 text-white rounded p-2 ms-12 hover:bg-red-600 transition'
                  onClick={() => deleteProduct(item._id)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {cart.length > 0 && (
        <div className='mt-4 w-full flex items-center justify-end'>
          <div className='p-6 bg-gray-100 shadow-md rounded-lg'>
            <h1 className='text-3xl text-gray-800 font-semibold'>Total Amount</h1>
            
            <div className='mt-3 flex items-center justify-between text-xl text-gray-800'>
              <h2>{cart.length} Product{cart.length > 1 ? "s" : ""}</h2>
              <h2>₹ {Total}</h2>
            </div>
            
            <button
              className='mt-4 bg-blue-500 text-white rounded px-6 py-3 w-full font-semibold hover:bg-blue-600 transition'
              onClick={placeOrder}
            >
              Place Your Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
