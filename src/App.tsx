import Footer from "./Footer";
import Hero from "./Hero";
import Movies from "./Movies";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <header className="p-4 border-b border-body fixed w-full top-0 z-50 bg-white">
        <NavBar />
      </header>
      <main className="bg-neutral mt-18">
        <section className="p-4 ">
          <Hero />
        </section>
        <section className="p-4 border-b border-body">
          <Movies />
        </section>
      </main>
      <footer className="p-4 bg-white">
        <Footer />
      </footer>
    </>
  );
}

export default App;
