import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [Values, setValue] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submit = async () => {
    try {
      if (
        Values.full_name === "" ||
        Values.email === "" ||
        Values.username === "" ||
        Values.password === ""
      ) {
        alert("Please enter all details");
      } else {
        const response = await axios.post(
          "http://localhost:3000/api/v1/sign-up",
          Values
        );
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-auto bg-white px-12 py-8 flex items-center justify-center">
      <div className="bg-gray-100 shadow-md rounded-lg px-8 py-6 w-full md:w-3/6 lg:w-2/6">
        <p className="text-gray-900 text-xl font-semibold">Signup</p>

        {/* Full Name Input */}
        <div className="mt-4">
          <label htmlFor="full_name" className="text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            className="w-full mt-2 bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            name="full_name"
            required
            value={Values.full_name}
            onChange={change}
          />
        </div>

        {/* Email Input */}
        <div className="mt-4">
          <label htmlFor="email" className="text-gray-700 font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            name="email"
            required
            value={Values.email}
            onChange={change}
          />
        </div>

        {/* Username Input */}
        <div className="mt-4">
          <label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full mt-2 bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Choose a username"
            name="username"
            required
            value={Values.username}
            onChange={change}
          />
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Create a password"
            name="password"
            required
            value={Values.password}
            onChange={change}
          />
        </div>

        {/* Signup Button */}
        <div className="mt-4">
          <button
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
            onClick={submit}
          >
            Signup
          </button>
        </div>

        {/* OR Separator */}
        <p className="flex mt-4 items-center justify-center text-gray-700 font-semibold">
          or
        </p>

        {/* Login Link */}
        <p className="flex mt-4 items-center justify-center text-gray-600 font-medium">
          Already have an account? &nbsp;
          <Link to="/login" className="hover:text-blue-600">
            <u>Login</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
