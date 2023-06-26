// ReactDOM
import ReactDOM from "react-dom/client";

// Global Style
import "./styles/global.css";

// Pages
import Crypt from "./pages/Crypt.jsx";
import Decrypt from "./pages/Decrypt.jsx";
import Error from "./pages/Error.jsx";

// Components
import Credits from "./components/Credits";

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Render
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Credits />
    <Routes>
      <Route path="/" element={<Crypt title="Crypto — Criptografar" />} />
      <Route
        path="/decrypt"
        element={<Decrypt title="Crypto — Descriptografar" />}
      />
      <Route path="/404" element={<Error title="Crypto — Erro" />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);
