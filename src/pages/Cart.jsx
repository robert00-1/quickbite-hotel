
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  

  const total = subtotal 

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            QuickBite Hotel
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Your Cart
          </h1>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some delicious meals to your cart.
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="mt-6 bg-red-500 text-white px-6 py-3
              rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Browse Menu
            </button>

          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5
                  flex flex-col sm:flex-row gap-5"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-xl"
                  />

                  {/* Details */}
                  <div className="flex-1">

                    <h2 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      KSh {item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mt-5">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-9 h-9 bg-gray-200 rounded-lg
                        font-bold hover:bg-gray-300"
                      >
                        −
                      </button>

                      <span className="font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-9 h-9 bg-gray-200 rounded-lg
                        font-bold hover:bg-gray-300"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Price + Remove */}
                  <div className="flex sm:flex-col justify-between items-end">

                    <p className="text-xl font-bold text-gray-900">
                      KSh {item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-semibold
                      hover:text-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

              <h2 className="text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    KSh {subtotal}
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
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full bg-red-500 text-white py-4
                rounded-xl font-bold text-lg hover:bg-red-600 transition"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Cart;

