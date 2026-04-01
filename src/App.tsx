import Footer from "./Footer";
import Hero from "./Hero";
import Movies from "./Movies";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <div className="p-4">
        <NavBar />
      </div>
      <div className="p-4 bg-neutral">
        <Hero />
      </div>
      <div className="p-4 bg-neutral border-b border-body">
        <Movies />
      </div>
      <div className="p-">
        <Footer />
      </div>
    </>
  );
}

export default App;
