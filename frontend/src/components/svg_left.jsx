const Left = () => {
  return (
    <>
      <div className="">
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
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
            d="M0,200L48,186.7C96,173,192,147,288,133.3C384,120,480,120,576,133.3C672,147,768,173,864,186.7C960,200,1056,200,1152,186.7C1248,173,1344,147,1392,133.3L1440,120L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Left;
