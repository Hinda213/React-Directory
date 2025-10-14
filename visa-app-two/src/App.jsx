import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Status from "./pages/Status";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/status">Status</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/status" element={<Status />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
