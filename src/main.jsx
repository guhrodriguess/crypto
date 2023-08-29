// ReactDOM
import ReactDOM from "react-dom/client";

// Global Style
import "./styles/global.css";

// Pages
import Crypt from "./pages/Crypt";
import Decrypt from "./pages/Decrypt";
import NotFound from "./pages/NotFound";

// Components
import Footer from "./components/ui/Footer";

// Provider
import Provider from "./contexts/Provider";

// React Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Router>
        <Provider>
            <Routes>
                <Route
                    path="/"
                    element={<Crypt title="Crypto — Criptografar" />}
                />
                <Route
                    path="/decrypt"
                    element={<Decrypt title="Crypto — Descriptografar" />}
                />
                <Route path="/404" element={<NotFound title="Crypto — Erro" />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </Provider>
        <Footer />
    </Router>
);
