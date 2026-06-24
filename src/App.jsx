import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import PropertyDetails from "./Pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;