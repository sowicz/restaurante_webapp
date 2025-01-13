import Img from "../../assets/pexels-reneterp-1581384.jpg";

export default function AboutUs() {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About us
        </h2>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Tekst */}
          <div className="flex-1">
            <h3 className="text-4xl font-semibold mb-8 text-center text-orange-500">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed text-xl mb-4">
              Welcome to <strong>Restaurant Name</strong>, where passion for food meets a cozy dining atmosphere.
              Our mission is to create unforgettable experiences through delicious meals and exceptional service.
              We use only the freshest ingredients and take pride in crafting dishes that satisfy every taste bud.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed text-xl">
              Whether you're looking for a romantic dinner, a family outing, or a celebration with friends,
              we are here to make your visit special. Join us and discover why our customers keep coming back for more!
            </p>
          </div>
          {/* Obrazek */}
          <div className="flex-1 flex justify-center items-center overflow-hidden">

            <img
              src={Img}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full h-auto mx-auto md:w-1/2 transform transition-transform duration-300 hover:scale-110"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
