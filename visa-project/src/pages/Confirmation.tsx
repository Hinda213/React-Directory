import { useAppDispatch } from "../hooks";
import { resetApplication } from "../store/slices/applicationSlice";
import { useEffect } from "react";

export default function Confirmation() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // pretend we submitted and then reset
    dispatch(resetApplication());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl font-semibold">Submitted</h2>
      <p>Your application was submitted (demo).</p>
    </div>
  );
}
