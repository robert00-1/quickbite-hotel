import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[650px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.ringhotels.de/hotels/Strandblick/1914/image-thumb__1914__maxwidth-xxl/8fd5de2288d20168_druck_Ringhotel_Strandblick_2024___DOMUSimages_082.73dcb926.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[650px] flex items-center">
        <div className="max-w-3xl text-white">

          <p className="text-red-400 font-semibold uppercase tracking-wider mb-4">
            Welcome to QuickBite Hotel
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Delicious Food,
            <span className="text-red-400"> Unforgettable </span>
            Experience
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Enjoy delicious meals, comfortable dining, and exceptional
            hospitality at QuickBite Hotel. We bring great taste and great
            experiences together.
          </p>

          {/* Explore Menu Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/menu")}
              className="bg-red-500 text-white px-7 py-3 rounded-lg
              font-semibold hover:bg-red-600 transition"
            >
              Explore Menu
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
