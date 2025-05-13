import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export default function GettingHere() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <img
          src="/D479-Prototype/images/palmtrees.jpg"
          alt=""
          className="mb-4 h-auto w-3/4 rounded-md"
        />

        <h3 className="mb-2 text-3xl">TRANSPORTATION</h3>
        <section className="flex items-center justify-between space-x-4 rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <img
            src="/D479-Prototype/images/cruiseship.jpg"
            alt="beach hut"
            className="mb-4 h-auto w-2/4 rounded-md"
          />
          <p className="text-gray-300">
            Almost all visitors arrive to Taniti by air, though some arrive on a
            small cruise ship that docks in Yellow Leaf Bay for one night per
            week. Taniti is served by a small airport that can accommodate small
            jets and propeller planes. Taniti is in the process of expanding the
            airport so larger jets will be able to land on the island within the
            next few years.
          </p>
        </section>
        <section className="flex items-center justify-between space-x-4 rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <p className="text-gray-300">
            Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every
            day. Private buses serve the rest of the island. Taxis are available
            in Taniti City, and rental cars can be rented from a local rental
            agency near the airport. Bikes and helmets are available to rent
            from several vendors (helmets are required by law). Taniti City is
            fairly flat and very walkable. Many tourists stay in the area
            surrounding Merriton Landing: this area is easy to explore on foot.
          </p>
          <img
            src="/D479-Prototype/images/island bus.jpg"
            alt="beach hut"
            className="mb-4 h-auto w-2/4 rounded-md"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
