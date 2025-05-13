import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export default function PlanTrip() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <img
          src="/D479-Prototype/images/beach.jpg"
          alt="beach"
          className="mb-4 h-auto w-3/4 rounded-md"
        />

        <h3 className="mb-2 text-3xl">PLAN TRIP</h3>
        <section className="flex items-center justify-between space-x-4 rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <form className="flex w-full flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1 text-left font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="rounded-md border border-gray-300 p-2"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1 text-left font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="rounded-md border border-gray-300 p-2"
                placeholder="Enter your last name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dateFrom" className="mb-1 text-left font-medium">
                Date From
              </label>
              <input
                type="date"
                id="dateFrom"
                name="dateFrom"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dateTo" className="mb-1 text-left font-medium">
                Date To
              </label>
              <input
                type="date"
                id="dateTo"
                name="dateTo"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="origin" className="mb-1 text-left font-medium">
                Origin
              </label>
              <input
                type="text"
                id="origin"
                name="origin"
                className="rounded-md border border-gray-300 p-2"
                placeholder="Hawaii"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="destination"
                className="mb-1 text-left font-medium"
              >
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                className="rounded-md border border-gray-300 p-2"
                placeholder="Tahiti"
                value="Tahiti"
                readOnly
              />
            </div>
            <button
              type="button"
              className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
