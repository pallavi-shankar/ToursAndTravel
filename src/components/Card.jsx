import { motion } from "framer-motion";

export default function Card({ image, title, description }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
