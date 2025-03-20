import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Inline CSS for Hover Effect */}
      <style>
        {`
          .hover-effect {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .hover-effect:hover {
            transform: scale(1.05); /* Slight zoom-in effect */
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); /* Add shadow on hover */
          }
        `}
      </style>

      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DqMSvVaXQxISjdvfNizw6F9ZkaCBMy42Yk6agRcJUE8=')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative">No One Should Sleep Hungry 🍽️</div>
      </div>

      {/* Header */}
      <header className="bg-gray-100 text-center py-6 shadow-md text-2xl font-bold">
        About Us
      </header>

      <div className="container mx-auto px-6 py-10">
        <section className="flex flex-wrap items-center bg-cover bg-fixed shadow-md rounded-lg p-6 my-6">
        <img
    src="./ourStory.jpg"
    alt="Mission"
    className="rounded-lg hover-effect h-[40%] w-[40%] object-cover"
/>

          <div className="w-full md:w-1/2 md:pl-6 text-left">
            <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
            <p className="mt-4">
              At Aahar Seva, our mission is to combat food insecurity by bridging the gap between surplus food from farms,
              restaurants, and households, and those in need, such as NGOs and community shelters. We strive to minimize
              food waste while providing nutritious meals to underprivileged individuals. Every meal we save and redistribute
              creates a stronger, more compassionate society.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="flex flex-wrap items-center bg-fixed shadow-md rounded-lg p-6 my-6">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-semibold text-blue-600">Our Story</h2>
            <p className="mt-4">
              Founded on a core belief that no food should go to waste while people go hungry, Aahar Seva began as a small initiative
              and grew into a movement of collective kindness. From a handful of volunteers, we now partner with numerous donors
              and NGOs across the region, ensuring that surplus food reaches the plates of those who need it the most.
              Together, we turn waste into hope.
            </p>
          </div>
          <img
            src=""
            alt="Our Story"
            className="w-full md:w-1/2 rounded-lg hover-effect"
          />
        </section>

        {/* Founders Section */}
        <section className="text-center my-6 bg-gray-50 p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600">Meet the Founders</h2>
          <div className="flex flex-wrap justify-center mt-6 gap-10">
            {[
              {
                name: "Sagar Gautam",
                role: "Leads Operations",
                img: "./sagar.jpg",
                description:
                  "Sagar ensures the seamless collection and distribution of food while managing logistics and partnerships with donors and NGOs. His leadership keeps the initiative running smoothly.",
              },
              {
                name: "Mukund Jha",
                role: "Drives Digital Solutions",
                img: "./mukund.jpg",
                description:
                  "Mukund leverages his tech expertise to develop platforms that track food donations and streamline delivery processes. His digital innovations have amplified the project's impact.",
              },
              {
                name: "Shivam",
                role: "Builds Strong Connections",
                img: "./shivam.jpg",
                description:
                  "Shivam fosters relationships with communities and donors, ensuring that the message of Aahar Seva inspires collective participation and long-term commitment.",
              },
            ].map((founder, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 m-4 rounded-lg shadow-md text-center w-64"
              >
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 hover-effect"
                />
                <h3 className="mt-4 text-xl font-semibold">{founder.name}</h3>
                <p className="text-gray-600 mt-2">{founder.role}</p>
                <p className="text-gray-600 mt-4">{founder.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-blue-600 text-white p-10 rounded-lg shadow-md my-6">
          <h2 className="text-2xl font-semibold">Join Us in Making a Difference</h2>
          <p className="mt-4">📞 <strong>9927000000</strong></p>
          <div className="mt-4">
            <a
              href="#"
              className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-md mx-2 hover:bg-gray-200"
            >
              Find a Distribution Center
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-md mx-2 hover:bg-gray-200"
            >
              💙 Become a Volunteer
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
