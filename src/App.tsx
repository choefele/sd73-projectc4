import { Route, Routes } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Discover from "./discover/Discover";

function App() {
  return (
    <>
      <header className="p-4 border-b border-body fixed w-full top-0 z-50 bg-white">
        <NavBar />
      </header>
      <main className="bg-neutral mt-18">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route
            path="*"
            element={<section className="p-4">Page not found.</section>}
          />
        </Routes>
      </main>
      <footer className="p-4 bg-white">
        <Footer />
      </footer>
    </>
  );
}

export default App;
