import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <section className="bg-red-500">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2">
              Special Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Get 20% Off Your First Order
            </h2>

            <p className="mt-2 text-red-100">
              Enjoy delicious meals at QuickBite Hotel.
            </p>
          </div>

          <button
            onClick={() => navigate("/menu")}
            className="bg-white text-red-500 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Order Now
          </button>

        </div>
      </div>
    </section>
  );
}

export default Banner;