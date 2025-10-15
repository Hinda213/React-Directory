import { useAppSelector } from "../app/hooks";
import { Link, useNavigate } from "react-router-dom";

export default function Review() {
  const app = useAppSelector((s) => s.application);
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/confirmation");

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Review Your Information</h2>
      <p>
        <strong>Visa Type:</strong> {app.visaType}
      </p>
      <p>
        <strong>Name:</strong> {app.personal.firstName} {app.personal.lastName}
      </p>
      <p>
        <strong>Email:</strong> {app.contact.email}
      </p>
      <div className="flex justify-between mt-6">
        <Link to="/apply" className="text-blue-600">
          Edit
        </Link>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
