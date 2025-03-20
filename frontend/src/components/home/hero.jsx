import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="h-[75vh] bg-white flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12">
      
      <div className="w-full md:w-3/6 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Partner for a Hunger-Free Tomorrow
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Join us to nourish lives and build a hunger-free future! Together, we make a lasting impact in the world 🌍
        </p>
        <div className="mt-6">
          <Link
            to="/Products"
            className="text-white text-lg md:text-xl font-semibold bg-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            Join Us
          </Link>
        </div>
      </div>
      <div className="w-full md:w-3/6 flex items-center justify-center">
        <img
          className="rounded-lg shadow-lg w-full md:w-[90%] h-auto"
          src="https://imgnew.outlookindia.com/public/uploads/articles/2021/2/13/Food-distribution_20200825.jpg"
          alt="Food Distribution"
        />
      </div>
    </div>
  );
};

export default Hero;
