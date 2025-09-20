import { motion } from "framer-motion";
import { useState } from "react";

export default function PackageCard({ image, title, price, category }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleBookNow = async () => {
    setIsLoading(true);

    try {
     
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to create checkout session.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
       res.status(500).json({ error: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">Category: {category}</p>
        <p className="text-yellow-500 font-semibold text-lg">Price: ${price}</p>
        <button
          onClick={handleBookNow}
          disabled={isLoading}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          {isLoading ? "Processing..." : "Book Now"}
        </button>
      </div>
    </motion.div>
  );
}
