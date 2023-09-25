import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Shop } from "../src/pages/shop/shop";
import Contact  from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./Context/shopContext";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;