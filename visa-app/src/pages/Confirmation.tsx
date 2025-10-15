import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
      <p className="mb-6 text-gray-600">
        Your visa application has been received. We’ll contact you soon.
      </p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
        Return Home
      </Link>
    </div>
  );
}
