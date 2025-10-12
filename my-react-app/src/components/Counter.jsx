import { useState } from "react";


function Counter (){
    const [count, setCount] = useState(0);

    return (
      <div style={{ backgroundColor: "tomato" }}>
        <h2>Count: {count}</h2>
        <button
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    );
}

export default Counter;