import "./App.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Left from "./components/svg_left";
import Hero from "./components/HomePage/Hero";
import Footer from "./components/footer"; // Import the Footer component
import SvgRight from "./components/SvgRight";

function App() {
  return (
    <>
      <div className="relative m-0 p-0 text-center min-h-screen bg-slate-200 ">
        <div className="relative w-full overflow-hidden z-0">
          <Left />
          <div className="absolute top-0 left-0 w-full h-full">
            <Navbar />
          </div>
          <Hero />
          <SvgRight />
        </div>
      </div>
    </>
  );
}

export default App;
