import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "D479 PA Prototype" },
    { name: "D479 PA Prototype", content: "D479 PA Prototype" },
  ];
};

export default function Index() {
  return(
    <>
      <Navbar />
      {/* hero */}
      <div className="flex flex-col justify-center items-center gap-20 p-2">
        <p className="justify-center items-center text-center text-6xl">DISCOVER TANITI</p>
        <Link to="./plan-trip"><div className="border border-gray-300 rounded-lg px-6 py-3 text-lg font-semibold cursor-pointer hover:bg-amber-500 transition-colors duration-200">
          PLAN TRIP
        </div>
        </Link>
      </div>

      {/* 3cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 pt-10">
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-bold mb-4">Explore Beaches</h3>
          <p className="text-gray-600">Discover the most beautiful beaches Taniti has to offer.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-bold mb-4">Stay</h3>
          <p className="text-gray-600">Relax in luxurious hotels and enjoy world-class hospitality during your stay in Taniti.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-bold mb-4">Transportation</h3>
          <p className="text-gray-600">Navigate Taniti with ease using our reliable transportation options.</p>
        </div>
      </div>

      {/* culture */}

      <h2 className="text-2xl font-bold text-center mt-10">EXPERIENCE THE CULTURE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 pt-10">
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
          <img src="/images/beach.jpg" alt="Beach" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-4">Explore Beaches</h3>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quis, molestiae quod soluta libero atque!
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
          <img src="/images/islet.jpg" alt="Island" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-4">Stay</h3>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet itaque voluptas repudiandae. Sapiente, laboriosam veniam?</p>
        </div>

      </div>
      <Footer />
    </>
  )
}
