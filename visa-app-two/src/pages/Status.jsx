import { useSelector, useDispatch } from "react-redux";
import { approveVisa, rejectVisa } from "../redux/visaSlice";

export default function Status() {
  const visa = useSelector((state) => state.visa);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Visa Status</h2>
      <p>
        <strong>Name:</strong> {visa.applicantName}
      </p>
      <p>
        <strong>Country:</strong> {visa.country}
      </p>
      <p>
        <strong>Status:</strong> {visa.status}
      </p>

      {visa.status === "Pending" && (
        <div>
          <button onClick={() => dispatch(approveVisa())}>Approve</button>
          <button onClick={() => dispatch(rejectVisa())}>Reject</button>
        </div>
      )}
    </div>
  );
}
