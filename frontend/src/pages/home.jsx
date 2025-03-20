import React from "react";
import Hero from "../components/home/hero";
import RecentlyAdded from "../components/home/RecentlyAdded";

const Home = () => {
  return (
    <div className="bg-white text-gray-900 px-10 py-8">
      <Hero />
      <RecentlyAdded />

      <div className="p-6 space-y-8">
        {/* About Section */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">About Us</h3>
            <p className="text-gray-600">
              Aahar Seva: Meal Share, Waste Not is dedicated to bridging the
              gap between surplus food and those in need. Our platform connects
              donors with local NGOs to ensure that excess food reaches the
              hungry rather than going to waste.
            </p>
            <p className="text-gray-600">
              We believe in a community-driven approach to fight hunger and
              reduce food wastage. Through collaboration, we aim to create a
              sustainable system where no food goes unused, benefiting both
              society and the environment.
            </p>
          </div>
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://th.bing.com/th/id/OIP.hjW1LO_9bI5yGQju3MUGSAHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Aahar Seva - Food Donation"
          />
        </div>

        {/* Donation Section */}
        <div className="bg-blue-100 shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Spread Hope: Donate a Meal Now!
            </h3>
            <p className="text-gray-700">
              Join the fight against hunger! Your donations can fill empty
              plates and bring smiles to countless faces.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Donate Now
          </button>
        </div>

        {/* Impact Stories */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Hear from Our Community: Impact Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rohan, Software Engineer",
                speech:
                  "Aahar Seva has made a significant difference in my life. Their mentorship program helped me land my dream job.",
              },
              {
                name: "Priya, Data Analyst",
                speech:
                  "I was hesitant to join Aahar Seva’s program, but it turned out to be the best decision. The guidance and support were invaluable.",
              },
              {
                name: "Amit, Social Worker",
                speech:
                  "Through Aahar Seva, I found an incredible network of people committed to fighting food waste and hunger.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="space-y-4 bg-white p-4 rounded-lg shadow">
                <div className="text-yellow-500">★★★★★</div>
                <p className="text-gray-700">{testimonial.speech}</p>
                <div className="text-gray-900 font-semibold">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Connect With Us</h2>
          <p className="text-gray-700">
            We would love to hear from you! Share your thoughts or inquire about
            collaboration.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Our Address</h3>
              <p className="text-gray-700">Ganga Nagar, Meerut</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Get In Touch</h3>
              <p className="text-gray-700">+91 9897*****</p>
              <p className="text-gray-700">info@aaharseva.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <form className="space-y-4">
              <label className="block text-gray-700" htmlFor="name">
                Enter your name
              </label>
              <input
                className="w-full p-2 border border-gray-300 bg-gray-50 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Full Name"
              />

              <label className="block text-gray-700" htmlFor="email">
                Enter your email
              </label>
              <input
                className="w-full p-2 border border-gray-300 bg-gray-50 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Your email id"
              />

              <label className="block text-gray-700" htmlFor="message">
                Write your message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 bg-gray-50 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                placeholder="Write your questions here"
              ></textarea>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
