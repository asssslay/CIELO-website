import {
  Hero,
  Experience,
  FoundersNote,
  Philosophy,
  UsedMaterials,
  Benefits,
  FindHome,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="">
      <Hero />
    </section>
    <section className="">
      <Experience />
    </section>
    <section className="py-[180px]">
      <FoundersNote />
    </section>
    <section className="">
      <Philosophy />
    </section>
    <section className="">
      <UsedMaterials />
    </section>
    <section className="">
      <Benefits />
    </section>
    <section className="">
      <FindHome />
    </section>
    <section className="">
      <Footer />
    </section>
  </main>
);

export default App;
