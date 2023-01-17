import "./App.css";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Theodo from "./pages/theodo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="theodo" element={<Theodo />} />
          </Routes>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
