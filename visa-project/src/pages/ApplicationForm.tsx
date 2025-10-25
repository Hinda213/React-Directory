import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setVisaType,
  updatePersonal,
  updateContact,
  setStep,
} from "../store/slices/applicationSlice";
import { useNavigate } from "react-router-dom";

export default function ApplicationForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { visaType, personal, contact } = useAppSelector((s) => s.application);

  const handleNext = () => {
    dispatch(setStep(2));
    navigate("/review");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Application</h2>

      <label className="block mt-4">Visa Type</label>
      <select
        value={visaType}
        onChange={(e) => dispatch(setVisaType(e.target.value))}
        className="border p-2"
      >
        <option value="">Select</option>
        <option value="tourist">Tourist</option>
        <option value="work">Work</option>
      </select>

      <h3 className="mt-4 font-medium">Personal Info</h3>
      <input
        placeholder="First name"
        value={personal.firstName}
        onChange={(e) =>
          dispatch(updatePersonal({ firstName: e.target.value }))
        }
        className="block border p-2 mt-2"
      />
      <input
        placeholder="Last name"
        value={personal.lastName}
        onChange={(e) => dispatch(updatePersonal({ lastName: e.target.value }))}
        className="block border p-2 mt-2"
      />

      <h3 className="mt-4 font-medium">Contact</h3>
      <input
        placeholder="Email"
        value={contact.email}
        onChange={(e) => dispatch(updateContact({ email: e.target.value }))}
        className="block border p-2 mt-2"
      />

      <div className="mt-4">
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Review
        </button>
      </div>
    </div>
  );
}
