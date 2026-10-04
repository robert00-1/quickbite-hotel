import { useCart } from "../context/CartContext";

function ManagerDashboard() {
  const { completedOrders } = useCart();

  // Only count orders that have been paid
  const paidOrders = completedOrders.filter(
    (order) => order.customer?.paymentMethod
  );

  // Total number of customers
  const totalCustomers = paidOrders.length;

  // Cash payments
  const cashPayments = paidOrders
    .filter(
      (order) =>
        order.customer?.paymentMethod?.toLowerCase() === "cash"
    )
    .reduce((total, order) => total + order.total, 0);

  // M-Pesa payments
  const mpesaPayments = paidOrders
    .filter(
      (order) =>
        order.customer?.paymentMethod?.toLowerCase() === "mpesa"
    )
    .reduce((total, order) => total + order.total, 0);

  // Total payments
  const totalPayments = paidOrders.reduce(
    (total, order) => total + order.total,
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            QuickBite Hotel
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Manager Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            View customers, orders, and payment records.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

          {/* Customers */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">
              Customers Paid
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {totalCustomers}
            </h2>
          </div>

          {/* Cash */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">
              Cash Payments
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              KSh {cashPayments}
            </h2>
          </div>

          {/* M-Pesa */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">
              M-Pesa Payments
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              KSh {mpesaPayments}
            </h2>
          </div>

          {/* Total */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">
              Total Payments
            </p>

            <h2 className="text-3xl font-bold text-red-500 mt-2">
              KSh {totalPayments}
            </h2>
          </div>

        </div>

        {/* Payment Sheet */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">
              Payment Sheet
            </h2>

            <p className="text-gray-500 mt-1">
              Customer orders and payment records
            </p>
          </div>

          {paidOrders.length === 0 ? (
            <div className="p-12 text-center">

              <div className="text-5xl mb-4">
                📋
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                No payment records yet
              </h3>

              <p className="text-gray-500 mt-2">
                Customer payment records will appear here.
              </p>

            </div>
          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-50">

                  <tr>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      #
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Customer
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Table
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Food Ordered
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Payment
                    </th>

                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Amount
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {paidOrders.map((order, index) => (

                    <tr
                      key={order.id}
                      className="border-t hover:bg-gray-50"
                    >

                      {/* Number */}
                      <td className="px-6 py-5">
                        {index + 1}
                      </td>

                      {/* Customer */}
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {order.customer?.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {order.customer?.phone}
                          </p>
                        </div>
                      </td>

                      {/* Table */}
                      <td className="px-6 py-5">
                        <span className="font-semibold">
                          Table {order.customer?.tableNumber}
                        </span>
                      </td>

                      {/* Food */}
                      <td className="px-6 py-5">

                        <div className="space-y-1">

                          {order.items.map((item, itemIndex) => (

                            <p
                              key={itemIndex}
                              className="text-sm text-gray-700"
                            >
                              {item.name} × {item.quantity}
                            </p>

                          ))}

                        </div>

                      </td>

                      {/* Payment */}
                      <td className="px-6 py-5">

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.customer?.paymentMethod?.toLowerCase() ===
                            "mpesa"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {order.customer?.paymentMethod?.toUpperCase()}
                        </span>

                      </td>

                      {/* Amount */}
                      <td className="px-6 py-5 text-right">

                        <span className="font-bold text-gray-900">
                          KSh {order.total}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

                {/* Total Row */}
                <tfoot>

                  <tr className="border-t-2 bg-gray-50">

                    <td
                      colSpan="5"
                      className="px-6 py-5 text-right font-bold text-lg"
                    >
                      TOTAL
                    </td>

                    <td className="px-6 py-5 text-right font-bold text-xl text-red-500">
                      KSh {totalPayments}
                    </td>

                  </tr>

                </tfoot>

              </table>

            </div>

          )}

        </div>

      </div>
    </section>
  );
}

export default ManagerDashboard;