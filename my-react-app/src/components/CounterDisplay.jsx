import { useSelector } from "react-redux";

function CounterDisplay() {
  const count = useSelector((state) => state.counter.value);
  return <h2>Current Count: {count}</h2>;
}

export default CounterDisplay;
