import React from "react";

const DonatePage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <header className="w-full bg-aqua text-black py-6 text-center text-2xl font-bold shadow-md">
        Aahar Seva: Meal Share, Waste Not
      </header>
      
      <main className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg mt-8">
        <h1 className="text-4xl font-bold text-black text-center">Donate to Aahar Seva</h1>
        <img src="/donate-banner.jpg" alt="Donate to Aahar Seva" className="w-full h-80 object-cover rounded-lg mt-6" />
        <p className="text-black text-lg text-center mt-4">
          Join our mission to reduce food waste and provide meals to those in need. Your support helps us bridge the gap between surplus food and hungry communities. 
          Every contribution makes a significant impact in rescuing food and feeding the underprivileged.
        </p>
        <div className="flex justify-center mt-6">
          <a href="#" className="bg-aqua text-black px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-400">Donate Now</a>
        </div>
      </main>
      
      <section className="w-full max-w-5xl mt-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black">How Your Donation Helps</h2>
        <p className="text-black text-lg mt-4">
          Your generosity enables us to:
        </p>
        <ul className="list-disc text-black mt-4 ml-8 text-lg">
          <li>Rescue surplus food from restaurants, farms, and bakeries.</li>
          <li>Deliver nutritious meals to NGOs, shelters, and families in need.</li>
          <li>Reduce food waste and promote environmental sustainability.</li>
          <li>Support logistics and storage for safe food distribution.</li>
        </ul>
        <img src="/impact.jpg" alt="Impact of Donations" className="w-full h-80 object-cover rounded-lg mt-6" />
      </section>
      
      <section className="w-full max-w-5xl mt-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black">Our Partners</h2>
        <p className="text-black text-lg mt-4">We are proud to collaborate with renowned hotels, restaurants, and bakeries to rescue and distribute surplus food.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-aqua p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Hotel Grand Feast</h3>
            <p className="text-black mt-2">A premium hotel committed to reducing food waste and sharing with the needy.</p>
          </div>
          <div className="bg-aqua p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Sunrise Bakery</h3>
            <p className="text-black mt-2">Freshly baked goods shared with those in need every day.</p>
          </div>
          <div className="bg-aqua p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Tasty Bites Restaurant</h3>
            <p className="text-black mt-2">Delicious meals with a heart for community welfare.</p>
          </div>
          <div className="bg-aqua p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">The Royal Dine</h3>
            <p className="text-black mt-2">Luxury dining with a commitment to reducing food waste.</p>
          </div>
          <div className="bg-aqua p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Harvest Farms</h3>
            <p className="text-black mt-2">Providing fresh surplus farm produce to nourish communities.</p>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-5xl mt-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black">Get Involved</h2>
        <p className="text-black text-lg mt-4">Beyond donations, you can support us by volunteering, spreading awareness, or organizing food drives in your community.</p>
        <img src="/volunteers.jpg" alt="Volunteers at work" className="w-full h-80 object-cover rounded-lg mt-6" />
        <div className="flex justify-center mt-6">
          <a href="#" className="bg-aqua text-black px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-400">Join as a Volunteer</a>
        </div>
      </section>
      
      <footer className="w-full bg-aqua text-black py-6 text-center mt-8 text-lg font-semibold">
        © 2025 Aahar Seva. All Rights Reserved. Together, we can make a difference.
      </footer>
    </div>
  );
};

export default DonatePage;
