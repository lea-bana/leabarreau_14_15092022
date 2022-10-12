import "../style/App.css";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Employees from "../pages/Employees.jsx";
import Error from "../pages/Error.jsx";

/**
 * App
 * Handling web app routes
 * @returns routes
 */

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/employees" element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
