// import { useState } from "react";
import "../App.css";

function UserStatus({IsOnline}){
return(
  <p>{IsOnline? "User is Online" : "User is Offline"}</p>
)
}
// function ToggleTheme() {
//   // Step 1: Create a state to track dark mode
//   const [isDark, setIsDark] = useState(true);

//   // Step 2: Function to toggle between light and dark
//   function toggleTheme() {
//     setIsDark(!isDark);
//   }

//   // Step 3: Return the UI
//   return (
//     <div className={isDark ? "dark-mode" : "light-mode"}>
//       <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
//       <button onClick={toggleTheme}>
//         Switch to {isDark ? "Light" : "Dark"} Mode
//       </button>
//     </div>
//   );
// }

export default UserStatus;
