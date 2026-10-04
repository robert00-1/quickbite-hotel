import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, placeOrder } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    tableNumber: "",
    email: "",
    
    paymentMethod: "mpesa",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 200 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = placeOrder(formData);
    console.log("Order placed:", order)

    

    

    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
          <div className="text-6xl mb-5">🛒</div>

          <h2 className="text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-3">
            Add some meals before proceeding to checkout.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Browse Menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            QuickBite Hotel
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Checkout
          </h1>

          <p className="text-gray-600 mt-3">
            Complete your details and place your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Customer Information
              </h2>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0712345678"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Table Number */}
<div className="mb-5">
  <label className="block text-gray-700 font-semibold mb-2">
    Table Number
  </label>

  <input
    type="number"
    name="tableNumber"
    value={formData.tableNumber}
    onChange={handleChange}
    placeholder="e.g. 5"
    min="1"
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg
    focus:outline-none focus:ring-2 focus:ring-red-500"
  />

  <p className="text-sm text-gray-500 mt-2">
    Enter the table number where you are seated.
  </p>
</div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>


              {/* Payment */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Payment Method
                </h2>

                <div className="space-y-3">

                  <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-red-500">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mpesa"
                      checked={formData.paymentMethod === "mpesa"}
                      onChange={handleChange}
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        M-Pesa
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay using your M-Pesa mobile number
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-red-500">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        Cash on Delivery
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>
                  </label>

                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-4 rounded-xl
                font-bold text-lg hover:bg-red-600 transition"
              >
                Place Order — KSh {total}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

            <h2 className="text-2xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: {item.quantity}
                    </p>

                    <p className="font-bold mt-2">
                      KSh {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  KSh {subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Delivery
                </span>

                <span className="font-semibold">
                  KSh {deliveryFee}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between">
                <span className="text-xl font-bold">
                  Total
                </span>

                <span className="text-xl font-bold text-red-500">
                  KSh {total}
                </span>
              </div>

            </div>

            <button
              onClick={() => navigate("/cart")}
              className="mt-6 w-full border-2 border-gray-300
              text-gray-700 py-3 rounded-lg font-semibold
              hover:bg-gray-100 transition"
            >
              ← Back to Cart
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;