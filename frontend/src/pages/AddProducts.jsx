import React, { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {
  const [Data, setData] = useState({
    pname: "",
    price: "",
    quantity: "",
    Url: "",
    desc: "",
    rating: ""
  })
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`
  };

  const change = (e) => {
    const { name, value } = e.target
    setData({ ...Data, [name]: value })
  }
  const submit = async () => {
    try {
      if (
        Data.pname === "" ||
        Data.price === "" ||
        Data.quantity === "" ||
        Data.Url === "" ||
        Data.desc === "" ||
        Data.rating === ""||
        Data.company === ""
      ) {
        alert("All feild are mandatory")
      }
      else {
        const response = await axios.post(
          "http://localhost:3000/api/v1/add-product",
          Data,
          { headers }
        )
        setData({
          pname: "",
          price: "",
          quantity: "",
          Url: "",
          desc: "",
          rating: "",
          company:""
        })
        alert(response.data.message)
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <div className="h-[100%] p-0 md:p-4">
    <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
      Add Products
    </h1>
    <div className="p-4 bg-zinc-100 rounded">
      <div className="mt-4">
        <label htmlFor="product-name" className="text-zinc-400">
          Product Name
        </label>
        <input
          id="product-name"
          type="text"
          className="w-full mt-2 bg-zinc-300 text-zinc-900 p-2 outline-none"
          placeholder="Product name"
          name="pname"
          required
          value={Data.pname}
          onChange={change}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="product-price" className="text-zinc-400">
          Price of Product
        </label>
        <input
          id="product-price"
          type="number"
          className="w-full mt-2 bg-zinc-300 text-zinc-900 p-2 outline-none"
          placeholder="Price of Product"
          name="price"
          required
          value={Data.price}
          onChange={change}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="product-image" className="text-zinc-400">
          Images
        </label>
        <input
          id="product-image"
          type="text"
          className="w-full mt-2 bg-zinc-300 text-zinc-900 p-2 outline-none"
          placeholder="URL of Product Image"
          name="Url"
          required
          value={Data.Url}
          onChange={change}
        />
      </div>
      <div className="mt-4 flex gap-4">
        <div className="w-3/6">
          <label htmlFor="product-quantity" className="text-zinc-400">
            Quantity
          </label>
          <input
            id="product-quantity"
            type="number"
            className="w-full mt-2 bg-zinc-300 text-zinc-900 p-2 outline-none"
            placeholder="Quantity of Product"
            name="quantity"
            required
            value={Data.quantity}
            onChange={change}
          />
        </div>
        <div className="w-3/6">
          <label htmlFor="product-rating" className="text-zinc-400">
            Rating
          </label>
          <input
            id="product-rating"
            type="number"
            className="w-full mt-2 bg-zinc-300 text-zinc-900 p-2 outline-none"
            placeholder="Rating"
            name="rating"
            required
            value={Data.rating}
            onChange={change}
          />
        </div>
        <div className="w-3/6">
          <label htmlFor="company" className="text-zinc-400">
            Your Resturants
          </label>
          <input
            id="product-rating"
            type="strings"
            className="w-full mt-2 bg-zinc-300 text-zinc-900 p-2 outline-none"
            placeholder="Your Resturants"
            name="company"
            required
            value={Data.company}
            onChange={change}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="product-description" className="text-zinc-400">
          Description of Product
        </label>
        <input
          id="product-description"
          type="textarea"
          className="w-full mt-2 bg-zinc-300 text-zinc-900 p-2 outline-none"
          placeholder="Description of Product"
          name="desc"
          required
          value={Data.desc}
          onChange={change}
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
        onClick={submit}
      >
        Add Product
      </button>
    </div>
  </div>
  

  )
}

export default AddProducts
