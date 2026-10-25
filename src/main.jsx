import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Portfolio() {
  return <main className="frame"><iframe src="/landing-pages/inner-green-3d.html" title="Akshat Rai | AI/ML Engineer" /></main>;
}
createRoot(document.getElementById("root")).render(<StrictMode><Portfolio /></StrictMode>);
