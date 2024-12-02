// src/App.js
import { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/index.js"; // Ensure correct import
import ExternalScriptsLoader from "./components/ExternalScriptsLoader.jsx";

function App() {
  return (
    <>
      <ExternalScriptsLoader></ExternalScriptsLoader>
      <Home />
    </>
  );
}

export default App;
