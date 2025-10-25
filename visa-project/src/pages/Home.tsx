import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p>
        Start a simple visa application to practice React + Redux + TypeScript.
      </p>
      <Link to="/apply" className="mt-4 inline-block">
        Start Application
      </Link>
    </div>
  );
}
