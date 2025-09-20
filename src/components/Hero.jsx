import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80"
        alt="Travel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20 z-10" />

     
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] overflow-y-auto"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
       
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-xl leading-tight">
          Explore the World with Paash Travels
        </h1>

    
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-1 drop-shadow-md">
          Discover amazing destinations, unforgettable experiences.
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-1 mb-4 drop-shadow-md">
          What are you looking for today?
        </p>

       
        <div className="w-full overflow-x-auto sm:overflow-visible">
          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-max sm:w-full px-2 sm:px-4">
            {[
              {
                title: "Destinations",
                image:
                  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
                
              },
              {
                title: "Packages",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            
              },
              {
                title: "Travel",
                image:
                  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
              
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-lg text-black rounded-2xl shadow-lg p-3 sm:p-4 md:p-5 cursor-pointer flex flex-col min-w-[250px] sm:min-w-0"
                onClick={() => navigate(card.link)}
              >
                <div className="w-full h-40 sm:h-48 md:h-64 lg:h-72 rounded-xl overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-blue-800 text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4 text-center">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

       
   <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl bg-[#ffd6a7] text-blue-900 font-semibold px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-lg hover:bg-[#ffb86a] transition"
  onClick={() => navigate("")}
>
  Welcome, Happy Searching!!
</motion.button>

      </motion.div>
    </div>
  );
}
