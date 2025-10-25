import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ApplicationForm from "./pages/ApplicationForm";
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/review" element={<Review />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
