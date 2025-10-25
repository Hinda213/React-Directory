import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";

export default function Review() {
  const state = useAppSelector((s) => s.application);
  return (
    <div>
      <h2 className="text-xl font-semibold">Review</h2>
      <pre className="mt-4 bg-white p-4 border">
        {JSON.stringify(state, null, 2)}
      </pre>
      <div className="mt-4">
        <Link
          to="/confirmation"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Confirm & Submit
        </Link>
      </div>
    </div>
  );
}
