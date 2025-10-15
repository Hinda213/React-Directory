import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  updatePersonal,
  updateContact,
  setVisaType,
} from "../features/application/applicationSlice";
import { useNavigate } from "react-router-dom";

export default function ApplicationForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const app = useAppSelector((s) => s.application);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/review");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl font-semibold mb-4">Visa Application Form</h2>
      <label>Visa Type:</label>
      <select
        value={app.visaType}
        onChange={(e) => dispatch(setVisaType(e.target.value))}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="">Select Visa Type</option>
        <option value="tourist">Tourist Visa</option>
        <option value="business">Business Visa</option>
      </select>
      <label>First Name:</label>
      <input
        type="text"
        className="w-full border p-2 mb-2 rounded"
        value={app.personal.firstName}
        onChange={(e) =>
          dispatch(updatePersonal({ firstName: e.target.value }))
        }
      />
      <label>Email:</label>
      <input
        type="email"
        className="w-full border p-2 mb-4 rounded"
        value={app.contact.email}
        onChange={(e) => dispatch(updateContact({ email: e.target.value }))}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Review Application
      </button>
    </form>
  );
}
