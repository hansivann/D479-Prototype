import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export const meta: MetaFunction = () => {
  return [
    { title: 'D479 PA Prototype' },
    { name: 'D479 PA Prototype', content: 'D479 PA Prototype' },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      {/* hero */}
      <div className="flex flex-col items-center justify-center gap-20 p-2">
        <p className="items-center justify-center text-center text-6xl">
          DISCOVER TANITI
        </p>
        <Link to="./plan-trip">
          <div className="cursor-pointer rounded-lg border border-gray-300 px-6 py-3 text-lg font-semibold transition-colors duration-200 hover:bg-amber-500">
            PLAN TRIP
          </div>
        </Link>
      </div>

      {/* 3cards */}
      <div className="grid grid-cols-1 gap-6 p-4 pt-10 md:grid-cols-3">
        <div className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Explore Beaches</h3>
          <p className="text-gray-600">
            Discover the most beautiful beaches Taniti has to offer.
          </p>
        </div>
        <div className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Stay</h3>
          <p className="text-gray-600">
            Relax in luxurious hotels and enjoy world-class hospitality during
            your stay in Taniti.
          </p>
        </div>
        <div className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Transportation</h3>
          <p className="text-gray-600">
            Navigate Taniti with ease using our reliable transportation options.
          </p>
        </div>
      </div>

      {/* culture */}

      <h2 className="mt-10 text-center text-2xl font-bold">
        EXPERIENCE THE CULTURE
      </h2>
      <div className="grid grid-cols-1 gap-6 p-4 pt-10 md:grid-cols-2">
        <div className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <img
            src="/images/islet.jpg"
            alt="Island"
            className="mb-4 h-64 w-full rounded-md object-cover"
          />
          <h3 className="mb-4 text-xl font-bold">Stay</h3>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            itaque voluptas repudiandae. Sapiente, laboriosam veniam?
          </p>
        </div>
        <div className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <img
            src="/images/beach.jpg"
            alt="Beach"
            className="mb-4 h-64 w-full rounded-md object-cover"
          />
          <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
          <p className="text-gray-600">
            Phone: (999)123-4321 <br />
            Email: welcome@tanitigov.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
