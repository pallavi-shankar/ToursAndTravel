import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const { title, price } = location.state || {};

  const handlePayment = async () => {
    if (!title || !price) return alert("No package selected!");

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
        alert("Payment session could not be created.");
        console.error("Payment error:", data);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong while initiating payment.");
    }
  };

  if (!title || !price) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-700">No package selected!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-12">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Complete Your Payment
      </motion.h1>

      <motion.p
        className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        You are paying for <span className="font-semibold">{title}</span>.
      </motion.p>

      <motion.p
        className="text-yellow-500 font-semibold text-lg mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Price: ${price}
      </motion.p>

      <motion.button
        onClick={handlePayment}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:bg-green-600 transition"
      >
        Pay Now
      </motion.button>
    </div>
  );
}
