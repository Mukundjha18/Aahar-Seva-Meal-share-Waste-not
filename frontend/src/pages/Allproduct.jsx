import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard/ProductCard';
import Loader from '../components/Loader/Loader';

const Allproduct = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/get-all-products");
        setData(response.data.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white h-auto px-12 py-8">
      <h4 className="text-3xl font-bold text-gray-800">All Products</h4>

      {!Data && (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      )}

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data &&
          Data.map((item, i) => (
            <div key={i}>
              <ProductCard data={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Allproduct;
