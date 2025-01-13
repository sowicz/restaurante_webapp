import bgImg from "../../assets/pexels-pixabay-260922.jpg";



const Hero = () => {
  return (
    <div
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Welcome to Our Restaurant
          </h1>
          <p className="text-gray-300 mt-4 text-lg md:text-xl">
            Experience the finest dining with our exclusive menu.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
