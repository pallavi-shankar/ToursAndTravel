import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Payment Successful! 
      </motion.h1>

      <motion.p
        className="text-gray-700 text-lg sm:text-xl mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Thank you for booking your package. Your payment has been completed successfully.
      </motion.p>

      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Back to Home
        </motion.button>
      </Link>
    </div>
  );
}
