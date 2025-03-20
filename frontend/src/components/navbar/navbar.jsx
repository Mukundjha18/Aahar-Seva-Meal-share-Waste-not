import React, { useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const baseLinks = [
    { 
      title: 'Home',
       link: '/'
       },

    {
       title: 'Products',
        link: '/products' 
      },
    { 
      title: 'Cart', 
      link: '/cart' 
    },
    {
        title: "Partner-with-us",
       link: "/partner-with-us"
       },
    { 
      title: "About-Us",
       link: "/about"
       },
    {
       title: "Donates",
        link: "/donate"
       },

  ];

  const profileLinks = [];
  if(isLoggedIn === false){
    baseLinks.splice(2,5)
  }
  if (isLoggedIn) {
    if (role === 'receiver') {
      profileLinks.push({ title: 'Profile', link: '/profile' });
    } else if (role === 'donater') {
      profileLinks.push({ title: 'Donator Profile', link: '/profile' })
      baseLinks.splice(3,0)
    } else if (role === 'admin') {
      profileLinks.push({ title: 'Admin Dashboard', link: '/admin-dashboard' });
    }
  }

  const authLinks = isLoggedIn
    ? []
    : [
        { title: 'LogIn', link: '/login' },
        { title: 'SignUp', link: '/signup' },
      ];

  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => setMobileNav(!mobileNav);

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-400 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            className="h-10 w-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-150"
            src="/ff.jpg"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">Aahar Seva</h1>
          <p className="text-xl">: Meal Share, Waste Not</p>
        </Link>
        <div className="nav-links block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {[...baseLinks, ...profileLinks].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="hover:text-blue-500 transition-all duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            {authLinks.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className={`px-4 py-1 ${
                  item.title === 'SignUp' ? 'bg-blue-500' : 'border border-blue-500'
                } rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <button
            className="text-white text-2xl hover:text-zinc-500 md:hidden"
            onClick={toggleMobileNav}
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      <div
        className={`${
          mobileNav ? 'block' : 'hidden'
        } bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {[...baseLinks, ...profileLinks, ...authLinks].map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="text-white mb-8 text-4xl font-semibold hover:text-gray-500 transition-all duration-300"
            onClick={toggleMobileNav}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;