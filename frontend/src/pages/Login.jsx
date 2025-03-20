import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  const [Values, setValue] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submit = async () => {
    try {
      if (Values.username === "" || Values.password === "") {
        alert("Please enter all details");
      } else {
        const response = await axios.post(
          "http://localhost:3000/api/v1/sign-in",
          Values
        );
        console.log(response.data.id);
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/profile");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-auto bg-white px-12 py-8 flex items-center justify-center">
      <div className="bg-gray-100 shadow-md rounded-lg px-8 py-6 w-full md:w-3/6 lg:w-2/6">
        <p className="text-gray-900 text-xl font-semibold">Login</p>

        {/* Username Input */}
        <div className="mt-4">
          <label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full mt-2 bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
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
            placeholder="Enter your password"
            name="password"
            required
            value={Values.password}
            onChange={change}
          />
        </div>

        {/* Login Button */}
        <div className="mt-4">
          <button
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
            onClick={submit}
          >
            Login
          </button>
        </div>

        {/* OR Separator */}
        <p className="flex mt-4 items-center justify-center text-gray-700 font-semibold">
          or
        </p>

        {/* Signup Link */}
        <p className="flex mt-4 items-center justify-center text-gray-600 font-medium">
          Create a new account &nbsp;
          <Link to="/Signup" className="hover:text-blue-600">
            <u>Signup</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
