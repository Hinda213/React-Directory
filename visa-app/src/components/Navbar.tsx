import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-lg">Visa App</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/review">Review</Link>
      </div>
    </nav>
  );
}
