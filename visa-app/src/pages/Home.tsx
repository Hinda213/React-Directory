import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Online Visa Application</h1>
      <p className="mb-6 text-gray-600">
        Apply for your visa online in a few easy steps.
      </p>
      <Link
        to="/apply"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Start Application
      </Link>
    </div>
  );
}
