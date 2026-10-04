import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center max-w-2xl w-full">

        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-5xl text-green-600">
            ✓
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-8">
          Order Submitted!
        </h1>

        {/* Message */}
        <p className="text-xl text-gray-600 mt-5">
          Your order has been submitted successfully.
        </p>

        <p className="text-lg text-gray-500 mt-3">
          Please wait, you are being served.
        </p>

        {/* Status */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
          <p className="text-yellow-700 font-semibold text-lg">
            Your order is being prepared
          </p>

          <p className="text-yellow-600 text-sm mt-2">
            A waiter will bring your order to your table.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mt-8 bg-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
        >
          Order More Food
        </button>

      </div>
    </section>
  );
}

export default OrderSuccess;