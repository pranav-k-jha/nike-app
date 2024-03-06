import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
const App = () => {
  return (
    <main className="relative">
      {/* <Nav /> */}
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
      <p class="bg-red-200 text-red-700 p-4 text-center font-bold">
        👨‍💻 Currently under construction! 🚧 <br />
        Just me tinkering with the code. Stay tuned for updates! 🚀
      </p>
    </main>
  );
};

export default App;
