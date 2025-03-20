import React from "react";
import { CheckCircle, Truck, ClipboardCheck, Image } from "lucide-react";


const PartnerWithUs = () => {
  const hIW = [
    { icon: <ClipboardCheck size={40} />, title: "Sign Up", description: "Get started by registering on our platform, where individuals, restaurants, and corporations can participate in donating surplus food to those in need." },
    { icon: <CheckCircle size={40} />, title: "List Your Surplus", description: "Once registered, simply list the extra food you have available for donation. Our system makes it easy to describe the food items, quantity, and pick-up location." },
    { icon: <Truck size={40} />, title: "We Connect & Deliver", description: "After you list your surplus food, our network of volunteers and logistics partners ensure that it is collected and delivered to the nearest community in need, ensuring timely and effective distribution." }
  ];

  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-96 bg-cover bg-center text-white text-center px-4" 
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NReXXbAO1Vd_SDJ5wsx6phMtO3zedkOTCw&s')" }}>
        <h2 className="text-4xl font-bold">Partner With Us</h2>
        <p className="text-lg mt-4 max-w-2xl">Join hands with Aahar Seva to bridge the gap between food donors and those in need. By working together, we can ensure that no food goes to waste while providing nutritious meals to those who need them most. Your partnership can help us expand our reach, support local communities, and make a real difference in the fight against hunger. Every small act of kindness contributes to a larger movement of change, bringing hope and sustenance to millions of underprivileged people across the country.</p>
        <button className="mt-6 px-6 py-2 text-lg bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500">Get Involved</button>
      </section>

      {/* Why Partner With Us */}
      <section className="text-center py-10 px-6">
        <h3 className="text-3xl font-semibold">Why Partner With Aahar Seva?</h3>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {[
            { title: "Reduce Food Waste", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9hh_X7zZQ12fSYc6oZ5l66HFMXeJjHsV8Q&s", text: "Every year, millions of tons of food go to waste while millions of people go hungry. Partnering with Aahar Seva means ensuring that perfectly edible surplus food is directed to those in need instead of being discarded. Our streamlined collection and distribution system enables food businesses, restaurants, and individuals to make a lasting impact in reducing wastage and feeding the less fortunate. Together, we can create a more sustainable, efficient, and compassionate food system." },
            { title: "Make an Impact", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsoqkkmfm-udgF3Wn7owlNncbLzToj2dNOw&s", text: "Your generosity can provide hot, nutritious meals to families struggling with food insecurity. Many people rely on food donations to survive, and your support ensures they receive essential nourishment. Through Aahar Seva, you contribute directly to transforming lives—whether by helping a child go to school without hunger, supporting a struggling family, or ensuring an elderly individual gets the sustenance they need. Every meal donated is a i toward a hunger-free world." },
            { title: "Be a Change Maker", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyywgQU_p_RBGP5oJ-eSBhlX5OTKuktg7Bw&s", text: "Food insecurity is a growing challenge, and we need compassionate individuals and organizations to i up. Partnering with Aahar Seva connects you to a strong network of donors, NGOs, and volunteers who are actively working toward ending hunger. Whether you are a business, an individual, or a social group, your involvement amplifies the movement for food justice. Join us in ensuring that every meal prepared has a purpose and every hungry person gets the nourishment they deserve." }
          ].map((card, index) => (
            <div key={index} className="w-72 p-6 bg-white rounded-lg shadow-lg text-center">
              <img src={card.img} alt={card.title} className="w-24 h-24 mx-auto rounded-full" />
              <h4 className="text-xl font-semibold mt-4">{card.title}</h4>
              <p className="mt-2 text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section className="py-16 bg-white text-center px-6 container mx-auto">
  <h3 className="text-4xl font-bold">Success Stories</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
    {[
      {
        text: "A small neighborhood bakery took the initiative to donate its extra bread at the end of each day, ultimately feeding more than 200 people in need and reducing food waste.",
        img: "https://media.istockphoto.com/id/1408412450/photo/fresh-produce-delivered-to-a-community.jpg?s=612x612&w=0&k=20&c=NXLRl2T9i3apbR5r56DhnPgzfxpLHeFnEgzp_fxmnug=",
      },
      {
        text: "A compassionate corporate partner stepped up and committed to providing weekly meals for an orphanage, ensuring that the children receive consistent and nutritious food supplies.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwV9lXXXH7AGbDpiWlgFUgB-diJCj9dcSnj5OPlnsAOvT_4OXsN8XG-Kwc_tI-v7ZDMw&usqp=CAU",
      },
      {
        text: "Several restaurants have actively joined our mission to eliminate food waste by contributing their surplus food, which has directly benefited underserved communities and significantly reduced landfill waste.",
        img: "https://online.vvmvp.org/upload/donations/2.png",
      },
    ].map((story, index) => (
      <div
        key={index}
        className="p-8 bg-gray-200 rounded-lg shadow-lg text-xl leading-loose"
      >
        <img
          src={story.img}
          alt={`Success story ${index + 1}`}
          className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <p className="text-gray-700 mt-4">{story.text}</p>
      </div>
    ))}
  </div>
</section>

   
    <section className="py-16 bg-gray-100 text-center px-6 container mx-auto">
      <h3 className="text-4xl font-bold">How It Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        {hIW.map((i, index) => (
          <div key={index} className="p-8 bg-white rounded-lg shadow-lg text-xl leading-loose flex flex-col items-center">
            {i.icon}
            <h4 className="text-2xl font-semibold mt-4">{i.title}</h4>
            <p className="text-gray-600 mt-4">{i.description}</p>
          </div>
        ))}
      </div>
    </section>
 
    <section className="py-16 bg-green-100 text-center px-6 container mx-auto">
      <h3 className="text-4xl font-bold">What Our Partners Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        {["Aahar Seva has made donating surplus food an effortless and highly impactful process. Their well-organized system ensures that food reaches those who need it most, making a real difference in communities.", "Through Aahar Seva, we have successfully reduced food waste while helping hundreds of people gain access to nutritious meals. It is a simple yet powerful initiative that every food business should support.", "With Aahar Seva’s efficient logistics and structured donation process, we have been able to ensure that our excess food does not go to waste, but instead finds its way to individuals and families in need."].map((testimonial, index) => (
          <div key={index} className="p-8 bg-white rounded-lg shadow-lg text-xl leading-loose italic">
            <img 
              src={`https://source.unsplash.com/300x200/?people,helping${index}`} 
              alt="Testimonial" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-700 mt-4">“{testimonial}”</p>
          </div>
        ))}
      </div>
    </section>
 
    </div>
  )
}

export default PartnerWithUs;
