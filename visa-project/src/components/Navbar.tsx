import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/review">Review</Link>
      </div>
    </nav>
  );
}
