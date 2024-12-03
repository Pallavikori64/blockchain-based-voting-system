const SvgRight = () => {
  return (
    <>
      <div className="">
        <svg
          className="relative block w-full h-full bg-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 400" // Adjusted height
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#0000FF", stopOpacity: 1 }} // Dark blue
              />
              <stop
                offset="50%"
                style={{ stopColor: "#4169E1", stopOpacity: 1 }} // Royal blue
              />
              <stop
                offset="100%"
                style={{ stopColor: "#87CEEB", stopOpacity: 1 }} // Sky blue
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,400L48,373.3C96,347,192,293,288,266.7C384,240,480,240,576,266.7C672,293,768,347,864,373.3C960,400,1056,400,1152,373.3C1248,347,1344,293,1392,266.7L1440,240L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            transform="rotate(180, 720, 200)" // Rotate the path 180 degrees around the center
          ></path>
        </svg>
      </div>
    </>
  );
};

export default SvgRight;
