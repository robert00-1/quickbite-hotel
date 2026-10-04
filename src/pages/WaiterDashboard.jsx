import { useCart } from "../context/CartContext";

function WaiterDashboard() {
  const { orders, updateOrderStatus } = useCart();

  const updateStatus = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
  };

  const getStatusStyle = (status) => {
    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Preparing") {
      return "bg-blue-100 text-blue-700";
    }

    if (status === "Ready") {
      return "bg-green-100 text-green-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            QuickBite Hotel
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Waiter Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            View and manage customer orders.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-500">Active Orders</p>
            <h2 className="text-3xl font-bold mt-2">
              {orders.length}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-500">Pending</p>
            <h2 className="text-3xl font-bold text-yellow-600 mt-2">
              {
                orders.filter(
                  (order) => order.status === "Pending"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-500">Preparing</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              {
                orders.filter(
                  (order) => order.status === "Preparing"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-500">Ready</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {
                orders.filter(
                  (order) => order.status === "Ready"
                ).length
              }
            </h2>
          </div>

        </div>

        {/* No Orders */}
        {orders.length === 0 && (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="text-6xl mb-5">
              ✓
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              No active orders
            </h2>

            <p className="text-gray-500 mt-2">
              All customer orders have been served.
            </p>
          </div>
        )}

        {/* Orders */}
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              {/* Order Header */}
              <div className="p-6 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>

                  <div className="flex items-center gap-3">

                    <h2 className="text-2xl font-bold text-gray-900">
                      Table {order.customer?.tableNumber}
                    </h2>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>

                  </div>

                  <p className="text-gray-600 mt-2">
                    Customer: {order.customer?.name}
                  </p>

                  <p className="text-gray-500 text-sm">
                    Phone: {order.customer?.phone}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-sm text-gray-500">
                    Order #{order.id}
                  </p>

                  <p className="text-2xl font-bold text-red-500 mt-1">
                    KSh {order.total}
                  </p>

                </div>

              </div>

              {/* Items */}
              <div className="p-6">

                <h3 className="font-bold text-lg mb-4">
                  Order Items
                </h3>

                <div className="space-y-3">

                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 rounded-lg p-4"
                    >

                      <div>

                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          KSh {item.price} × {item.quantity}
                        </p>

                      </div>

                      <p className="font-bold">
                        KSh {item.price * item.quantity}
                      </p>

                    </div>
                  ))}

                </div>

                {/* Status Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {/* Pending → Preparing */}
                  {order.status === "Pending" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "Preparing")
                      }
                      className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                      Start Preparing
                    </button>
                  )}

                  {/* Preparing → Ready */}
                  {order.status === "Preparing" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "Ready")
                      }
                      className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                      Mark as Ready
                    </button>
                  )}

                  {/* Ready → Served */}
                  {order.status === "Ready" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "Served")
                      }
                      className="bg-gray-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                      Mark as Served
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WaiterDashboard;