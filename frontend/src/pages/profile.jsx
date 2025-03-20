import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Profile/Sidebar';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import MobileNav from '../components/Profile/Mobilenav';

const Profile = () => {
  const [Profile, setProfile] = useState(null);

  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/get-user-information',
          { headers }
        );
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white px-4 md:px-12 flex flex-col md:flex-row py-8 gap-4 text-gray-900 min-h-screen">
      {!Profile ? (
        <div className="w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="md:w-1/6 w-full h-auto lg:h-screen border-r border-gray-300">
            <Sidebar data={Profile} />
            <MobileNav />
          </div>
          <div className="md:w-5/6 w-full p-4">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
