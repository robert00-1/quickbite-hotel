import { createContext, useContext,useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("quickbiteOrders");

    return savedOrders ? JSON.parse(savedOrders) : [];
  });
  const [completedOrders, setCompletedOrders] = useState(() => {
  const savedCompletedOrders =
    localStorage.getItem("quickbiteCompletedOrders");

  return savedCompletedOrders
    ? JSON.parse(savedCompletedOrders)
    : [];
});
  useEffect(() => {
  const handleStorageChange = (event) => {
    if (event.key === "quickbiteOrders") {
      const updatedOrders = event.newValue
        ? JSON.parse(event.newValue)
        : [];

      setOrders(updatedOrders);
    }

    if (event.key === "quickbiteCompletedOrders") {
      const updatedCompletedOrders = event.newValue
        ? JSON.parse(event.newValue)
        : [];

      setCompletedOrders(updatedCompletedOrders);
    }
  };

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
}, []);

  const addToCart = (meal, price, quantity) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === meal.idMeal
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === meal.idMeal
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          price: price,
          quantity: quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const placeOrder = (customerInfo) => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const deliveryFee = 0;

    const newOrder = {
      id: Date.now(),
      customer: customerInfo,
      items: cartItems,
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      total: subtotal + deliveryFee,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const updatedOrders = [...orders, newOrder];

    setOrders(updatedOrders);

    localStorage.setItem(
      "quickbiteOrders",
      JSON.stringify(updatedOrders)
    );

    setCartItems([]);

    return newOrder;
  };
const updateOrderStatus = (orderId, newStatus) => {
  const order = orders.find(
    (order) => order.id === orderId
  );

  if (!order) {
    return;
  }

  if (newStatus === "Served") {
    const completedOrder = {
      ...order,
      status: "Served",
      servedAt: new Date().toISOString(),
    };

    const updatedOrders = orders.filter(
      (order) => order.id !== orderId
    );

    const updatedCompletedOrders = [
      ...completedOrders,
      completedOrder,
    ];

    setOrders(updatedOrders);
    setCompletedOrders(updatedCompletedOrders);

    localStorage.setItem(
      "quickbiteOrders",
      JSON.stringify(updatedOrders)
    );

    localStorage.setItem(
      "quickbiteCompletedOrders",
      JSON.stringify(updatedCompletedOrders)
    );

    return;
  }

  const updatedOrders = orders.map((order) =>
    order.id === orderId
      ? {
          ...order,
          status: newStatus,
        }
      : order
  );

  setOrders(updatedOrders);

  localStorage.setItem(
    "quickbiteOrders",
    JSON.stringify(updatedOrders)
  );
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        completedOrders,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        placeOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
