import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth';

const Sidebar = (data) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const role = useSelector((state) => state.auth.role);
  
  return (
    <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between h-auto lg:h-full'>
      <div className='flex flex-col items-center justify-center'>
        <img src={data.avatar} className='h-[12vh] rounded-full border border-gray-300' alt="avatar" />
        <p className='mt-3 text-xl text-gray-800 font-semibold'>
          Username: {data.username}
        </p>
        <p className='mt-1 text-normal text-gray-600'>E-mail: {data.email}</p>
        <div className='w-full mt-4 h-[1px] bg-gray-300 hidden lg:block'></div>
      </div>

      {role === "receiver" && (
        <div className='w-full flex-col items-center justify-center hidden lg:flex'>
          <Link
            to="/profile"
            className='text-gray-800 font-semibold w-full py-2 mt-4 text-center hover:bg-gray-200 rounded transition-all duration-300'
          >
            Favourites
          </Link>
          <Link
            to="/profile/orderHistory"
            className='text-gray-800 font-semibold w-full py-2 mt-4 text-center hover:bg-gray-200 rounded transition-all duration-300'
          >
            Order History
          </Link>
          <Link
            to="/profile/settings"
            className='text-gray-800 font-semibold w-full py-2 mt-4 text-center hover:bg-gray-200 rounded transition-all duration-300'
          >
            Settings
          </Link>
        </div>
      )}
      {role === "donater" && (
        <div className='w-full flex-col items-center justify-center hidden lg:flex'>
          <Link
            to="/profile"
            className='text-gray-800 font-semibold w-full py-2 mt-4 text-center hover:bg-gray-200 rounded transition-all duration-300'
          >
            All Orders
          </Link>
          <Link
            to="/profile/add-product"
            className='text-gray-800 font-semibold w-full py-2 mt-4 text-center hover:bg-gray-200 rounded transition-all duration-300'
          >
            Add Products
          </Link>
        </div>
      )}
      <button
        className='bg-red-500 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center px-4 py-2 rounded hover:bg-red-400 transition-all duration-300'
        onClick={() => {
          dispatch(authActions.logout());
          dispatch(authActions.changeRole("Receiver"));
          localStorage.clear();
          history("/");
        }}
      >
        Logout <FaArrowRightFromBracket className='ml-4' />
      </button>
    </div>
  );
};

export default Sidebar;
