import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <img
          src="/public/images/palmtrees.jpg"
          alt="horizontal line of palm trees"
          className="mb-4 h-auto w-3/5"
        />
        <section className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <h3 className="mb-2 text-3xl">TANITI</h3>
          <p className="text-gray-300">
            Taniti is a small, tropical island in the Pacific. While the island
            has an area of less than 500 square miles, the terrain is varied and
            includes both sandy and rocky beaches, a small but safe harbor, lush
            tropical rainforests, and a mountainous interior that includes a
            small, active volcano. Taniti has an indigenous population of about
            20,000. Until a recent increase in tourism, most the Tanitian
            economy was dominated by fishing or agriculture.
          </p>
        </section>
        <section className="rounded-lg border border-gray-300 p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg">
          <h3 className="mb-2 text-left text-2xl">
            Frequently Asked Questions
          </h3>
          <div className="text-left text-gray-300">
            <p>
              Power outlets are 120 volts (the same as in the United States).
            </p>
            <p>
              Alcohol is not allowed to be served or sold between the hours of
              midnight and 9:00 a.m.
            </p>
            <p>
              The drinking age on Taniti is 18 and the drinking age is not
              strictly enforced.
            </p>
            <p>
              Many younger Tanitians speak fluent English. Very little English
              is spoken in rural areas, especially by the older residents.
            </p>
            <p>
              There is one hospital and several clinics. The hospital has many
              multilingual employees.
            </p>
            <p>
              Violent crime is very rare on Taniti, but as tourism increases,
              there are more reports of pickpocketing and other petty crimes.
            </p>
            <p>
              Taniti enjoys a large number of national holidays, and many
              tourist attractions and restaurants will be closed on holidays, so
              visitors should plan accordingly.
            </p>
            <p>
              Taniti uses the U.S. dollar as its currency, but many businesses
              will also accept euros and yen. Several banks facilitate currency
              exchange, and many businesses accept major credit cards.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
