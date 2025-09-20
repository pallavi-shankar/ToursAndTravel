import { motion } from "framer-motion";
import { FaTaxi, FaMotorcycle, FaBus, FaPlane, FaTrain, FaCar } from "react-icons/fa";

export default function TravelOptions() {
  const options = [
    { name: "Cab Booking", icon: <FaTaxi size={40} />, description: "Book a cab instantly for local & outstation travel." },
    { name: "Bike Rentals", icon: <FaMotorcycle size={40} />, description: "Affordable two-wheeler rentals for solo travel." },
    { name: "Taxi Services", icon: <FaTaxi size={40} />, description: "Hire a taxi with driver for hassle-free travel." },
    { name: "Bus Booking", icon: <FaBus size={40} />, description: "Book intercity & sightseeing bus tickets easily." },
    { name: "Train Tickets", icon: <FaTrain size={40} />, description: "Plan your trip with confirmed train bookings." },
    { name: "Car Rentals", icon: <FaCar size={40} />, description: "Rent a self-drive car for flexible road trips." },
  ];

  return (
    <section id="travel-options" className="py-16 px-4 md:px-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Travel Options</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {options.map((option, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-purple-700 mb-4">{option.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
            <p className="text-gray-600">{option.description}</p>
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-purple-800 font-semibold rounded-lg hover:bg-yellow-300 transition">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
