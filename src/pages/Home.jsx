import Hero from "../components/Hero";
import Card from "../components/Card";
import PackageCard from "../components/PackageCard";
import TestimonialCard from "../components/TestimonialCard";
import TravelOptions from "../components/TravelOptions";



export default function Home() {
const destinations = [
  {
    title: "Paris, France",
    description: "The city of lights, love, and culture.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bali, Indonesia",
    description: "Tropical paradise with beaches and temples.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New York, USA",
    description: "The city that never sleeps.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tokyo, Japan",
    description: "A dazzling blend of tradition and technology.",
    image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cape Town, South Africa",
    description: "Where mountains meet the ocean in stunning harmony.",
    image: "https://images.unsplash.com/photo-1595708323549-85635381d0d1?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Santorini, Greece",
    description: "Whitewashed cliffs and sunsets over the Aegean Sea.",
    image: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



const packages = [
  {
    title: "Adventure in Alps",
    category: "Adventure",
    price: 1200,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Paris Getaway",
    category: "Stargazing",
    price: 2000,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wildlife Safari",
    category: "Wildlife",
    price: 1500,
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tropical Bali Escape",
    category: "Beach",
    price: 1800,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
{
  title: "Cultural Kyoto Journey",
  category: "Culture",
  price: 1600,
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
},

{
  title: "Northern Lights Expedition",
  category: "Nature",
  price: 2200,
  image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
},

];


const testimonials = [
  {
    name: "Alice Johnson",
    role: "Traveler",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "Paash Travels made my vacation unforgettable!",
  },
  {
    name: "Michael Smith",
    role: "Adventure Seeker",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    message: "Excellent service and amazing destinations.",
  },
  {
    name: "Sara Williams",
    role: "Tourist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message: "Highly recommend Paash Travels for family trips.",
  },
  {
    name: "David Lee",
    role: "Solo Explorer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    message: "Booking with Paash was seamless and stress-free.",
  },
  {
    name: "Priya Mehta",
    role: "Family Vacationer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    message: "Our kids loved every moment—thank you Paash Travels!",
  },
  {
    name: "Carlos Rivera",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    message: "The landscapes and local guides were beyond amazing.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1548957175-84f0f9af659e?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661904024889-0f8bec080dd4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  "https://images.unsplash.com/photo-1519338381761-c7523edc1f46?q=80&w=1277&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  "https://images.unsplash.com/photo-1536607961765-592e80bcc19e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
];


  return (
    <div>
      <Hero />


<section id="about" className="py-20 px-4 md:px-16 bg-white">
  <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
    
   
<div className="w-full md:w-[65%] lg:w-[70%]">
  <img
    src="https://3.imimg.com/data3/BE/DV/MY-13222257/tours-and-travels-services.jpg"
    alt="Our Team"
    className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-[750px]"
  />
</div>


  
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
        ABOUT...
      </h2>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Paash Travels & Tours
      </h2>

      <p className="text-base sm:text-lg text-gray-600 mb-4">
        At <span className="font-semibold text-blue-700">Paash Travels</span>, we don’t just plan trips—
      </p>

      <p className="text-base sm:text-lg text-gray-600 mb-4">
        ✈️ We offer handpicked <span className="font-semibold text-blue-700">destinations</span> across the globe—from the romantic streets of Paris to the tropical beauty of Bali.
      </p>

      <p className="text-base sm:text-lg text-gray-600 mb-4">
        🧳 Our <span className="font-semibold text-blue-700">custom travel packages</span> cater to every kind of traveler—solo explorers, families, honeymooners, and thrill-seekers.
      </p>

      <p className="text-base sm:text-lg text-gray-600 mb-4">
        🗺️ We provide <span className="font-semibold text-blue-700">local guides</span>, curated itineraries, and insider tips to help you explore like a native.
      </p>

      <p className="text-base sm:text-lg text-gray-600 mb-6">
        💬 With <span className="font-semibold text-blue-700">secure booking</span>, 24/7 support, and a passion for joyful travel, Paash is your trusted companion from planning to touchdown.
      </p>

    </div>
  </div>
</section>


      
      <section id= "destinations" className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              image={dest.image}
              title={dest.title}
              description={dest.description}
            />
          ))}
        </div>
      </section>

    
      <section id="packages" className="py-16 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Tour Packages</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {packages.map((pack, index) => (
            <PackageCard
              key={index}
              image={pack.image}
              title={pack.title}
              category={pack.category}
              price={pack.price}
            />
          ))}
        </div>
      </section>

       <TravelOptions />

          
      <section id="testimonials" className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              name={t.name}
              role={t.role}
              image={t.image}
              message={t.message}
            />
          ))}
        </div>
      </section>


      
      <section id="gallery" className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery / Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg cursor-pointer">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform transition duration-500 hover:scale-110 hover:brightness-90"
              />
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

 
