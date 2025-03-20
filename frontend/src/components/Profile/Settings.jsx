import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

const Settings = () => {
  const [Value, setValue] = useState({ address: "" });
  const [ProfileData, setProfileData] = useState();
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`
  };

  const change = (e) => {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-user-information",
        { headers }
      );
      setProfileData(response.data);
      setValue({ address: response.data.address });
    };
    fetch();
  }, []);

  const submitAddress = async () => {
    const response = await axios.put(
      "http://localhost:3000/api/v1/update-address",
      { address: Value.address },
      { headers }
    );
    alert(response.data.message);
  };

  return (
    <>
      {!ProfileData && (
        <div className='w-full h-full flex items-center justify-center'>
          <Loader />
        </div>
      )}
      {ProfileData && (
        <div className='h-full p-6 bg-white text-gray-800 rounded-lg shadow-md'>
          <h1 className='text-3xl md:text-5xl font-semibold text-gray-700 mb-8'>
            Settings
          </h1>
          <div className='flex gap-12'>
            <div>
              <label className='text-gray-600'>Username</label>
              <p className='p-2 rounded bg-gray-100 mt-2 font-semibold'>
                {ProfileData.username}
              </p>
            </div>
            <div>
              <label className='text-gray-600'>Email</label>
              <p className='p-2 rounded bg-gray-100 mt-2 font-semibold'>
                {ProfileData.email}
              </p>
            </div>
          </div>
          <div className='mt-4 flex flex-col'>
            <label className='text-gray-600'>Address</label>
            <textarea
              className='p-2 rounded bg-gray-100 mt-2 font-semibold border border-gray-300'
              rows='5'
              placeholder='Address'
              name='address'
              value={Value.address}
              onChange={change}
            />
          </div>
          <div className='mt-4 flex justify-end'>
            <button
              className='bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition-all duration-300'
              onClick={submitAddress}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
