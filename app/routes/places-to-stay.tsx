import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export default function PlacesToStay() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <img
          src="/public/images/beach-hut.jpg"
          alt="horizontal line of palm trees"
          className="mb-4 h-auto w-3/5"
        />
        <section className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <h3 className="mb-2 text-3xl">TANITI LODGING</h3>
          <p className="text-gray-300">
            Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one
            large, four-star resort. There are many small, family-owned hotels and a growing number
            of bed and breakfasts.
          </p>
        </section>
        <section className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <div className="text-left text-gray-300">
            <p>
              All types of lodging are strictly regulated and regularly inspected by the Tanitian
              government.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
