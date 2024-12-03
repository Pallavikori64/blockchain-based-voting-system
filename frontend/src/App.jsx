import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Left from "./components/svg_left";

function App() {
  return (
    <>
      <div className="relative m-0 p-0 text-center min-h-screen bg-slate-900">
        <div className="relative w-full overflow-hidden z-0">
          <svg
            className="relative block w-full h-full" // Reduced height here
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200" // Adjusted viewBox height
          >
            <defs>
              <linearGradient
                id="gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientTransform="rotate(60)"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#3d3393", stopOpacity: 1 }}
                />
                <stop
                  offset="37%"
                  style={{ stopColor: "#2b76b9", stopOpacity: 1 }}
                />
                <stop
                  offset="65%"
                  style={{ stopColor: "#2cacd1", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#35eb93", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              fillOpacity="1"
              d="M0,200L48,186.7C96,173,192,147,288,133.3C384,120,480,120,576,133.3C672,147,768,173,864,186.7C960,200,1056,200,1152,186.7C1248,173,1344,147,1392,133.3L1440,120L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="absolute top-0 left-0 w-full h-full">
            <Navbar />
          </div>
        </div>
        <div className="relative z-10 container mx-auto p-4 pt-24">
          <h1 className="text-4xl font-bold text-white">Hello, TailwindCSS!</h1>
          <p className="text-white">This is a simple TailwindCSS example.</p>
        </div>
      </div>
    </>
  );
}

export default App;
