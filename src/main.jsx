// ReactDOM
import ReactDOM from "react-dom/client";

// Pages
import Crypt from "./pages/Crypt.jsx";
import Decrypt from "./pages/Decrypt.jsx";
import Error from "./pages/Error.jsx";

// Global Style
import "./styles/global.css";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Render
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Crypt />} />
      <Route path="/decrypt/:cipherText" element={<Decrypt />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);
