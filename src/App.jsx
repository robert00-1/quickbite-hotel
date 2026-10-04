import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MealDetails from "./pages/MealDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WaiterDashboard from "./pages/WaiterDashboard";
import OrderSuccess from "./pages/OrderSuccess";
import ManagerDashboard from "./pages/ManagerDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
        
<Route path="/waiter" element={<WaiterDashboard />} />
        <Route
  path="/manager"
  element={<ManagerDashboard />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;