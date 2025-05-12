import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export default function ThingsToDo() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <img
          src="/images/fruit-platter.jpg"
          alt="horizontal line of palm trees"
          className="mb-4 h-auto w-3/5 rounded-md"
        />
        <div className="grid grid-cols-1 gap-6 p-4 pt-10 md:grid-cols-2">
          <div className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
            <img
              src="/images/seafood-platter.jpg"
              alt="seafood platter"
              className="mb-4 h-64 w-full rounded-md object-cover"
            />
            <h3 className="mb-4 text-xl font-bold">Diverse Restaurants</h3>
            <p className="text-gray-600">
              Taniti currently has 10 restaurants: five serve mostly local fish
              and rice, three serve American-style meals, and two serve
              Pan-Asian cuisine.
            </p>
          </div>
          <div className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
            <img
              src="/images/octopus food.jpg"
              alt="Fried Octopus"
              className="mb-4 h-64 w-full rounded-md object-cover"
            />
            <h3 className="mb-4 text-xl font-bold">Convenient Groceries</h3>
            <p className="text-gray-600">
              Taniti has two supermarkets, two smaller grocery stores, and one
              convenience store that is open 24 hours a day.
            </p>
          </div>
        </div>
        <h3 className="mb-2 text-3xl">Entertainment and Sightseeing</h3>
        <section className="flex items-center justify-between space-x-4 rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <img
            src="/images/beach-hut.jpg"
            alt="beach hut"
            className="mb-4 h-auto w-2/4 rounded-md"
          />
          <p className="text-gray-300">
            Taniti offers a variety of activities beyond its famous beaches and
            rainforest, such as visiting museums, snorkeling, zip-lining,
            exploring art galleries, and enjoying nightlife in Merriton Landing,
            a growing hub in Yellow Leaf Bay.
          </p>
        </section>
        <section className="flex items-center justify-between space-x-4 rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <p className="text-gray-300">
            Most tourists spend most of their time in Taniti City, which boasts
            native architecture and nearby white, sandy beaches that encircle
            Yellow Leaf Bay. Other popular activities include boat or bus tours
            of the island, hikes in the rainforest, or visits to Taniti&apos;s
            active volcano.
          </p>
          <img
            src="/images/volcano.jpg"
            alt="beach hut"
            className="mb-4 h-auto w-2/4 rounded-md"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
