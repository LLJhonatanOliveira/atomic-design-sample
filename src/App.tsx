import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/molecules/Header/Header";
import { CatalogPage } from "./pages/CatalogPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignUpPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/" element={<LoginPage />} /> {/* Redireciona para login */}
      </Routes>
    </Router>
  );
};

export default App;
