import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({ data, favourite }) => {
  const handleRemoveProduct = async () => {
    try {
      const headers = {
        id: localStorage.getItem('id'),
        authorization: `Bearer ${localStorage.getItem('token')}`,
        productid: data._id,
      };

      const response = await axios.put(
        "http://localhost:3000/api/v1/remove-product-to-favourite",
        {},
        { headers }
      );

      alert(response.data.message);
    } catch (error) {
      console.error("Error removing product:", error);
      alert("Failed to remove product from favourites.");
    }
  };

  return (
    <div className="bg-zinc-100 rounded-lg p-4 flex flex-col shadow-md">
      <Link to={`/view-product-details/${data._id}`}>
        <div>
          <div className="bg-zinc-300 rounded flex items-center justify-center p-2">
            <img src={data.Url} alt={data.pname} className="h-[25vh] object-contain" />
          </div>
          <h2 className="mt-4 text-xl text-zinc-900 font-semibold">
            {data.pname}
          </h2>
          <p className="mt-2 text-zinc-600 font-medium">by {data.company}</p>
          <p className="mt-2 text-zinc-900 font-bold text-xl">
            ₹{data.price}
          </p>
        </div>
      </Link>
      {favourite && (
        <button
          className="bg-yellow-50 px-4 py-2 rounded border border-yellow-500 text-yellow-600 mt-2 hover:bg-yellow-400 hover:text-white transition"
          onClick={handleRemoveProduct}
        >
          Remove From Favourite
        </button>
      )}
    </div>
  );
};

export default ProductCard;
