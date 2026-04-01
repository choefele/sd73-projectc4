import Footer from "./Footer";
import Hero from "./Hero";
import Movies from "./Movies";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <header className="p-4 border-b border-body">
        <NavBar />
      </header>
      <main className="bg-neutral">
        <section className="p-4 ">
          <Hero />
        </section>
        <section className="p-4 border-b border-body">
          <Movies />
        </section>
      </main>
      <footer className="p-4">
        <Footer />
      </footer>
    </>
  );
}

export default App;
