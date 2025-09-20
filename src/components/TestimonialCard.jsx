import { motion } from "framer-motion";

export default function TestimonialCard({ name, role, image, message }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-gray-700 mb-4">&quot;{message}&quot;</p>
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
    </motion.div>
  );
}
