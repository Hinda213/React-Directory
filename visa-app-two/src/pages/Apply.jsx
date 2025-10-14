import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyVisa } from "../redux/visaSlice";

export default function Apply() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(applyVisa({ name, country }));
    setName("");
    setCountry("");
    alert("Visa Application Submitted!");
  };

  return (
    <div>
      <h2>Apply for Visa</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Destination Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
