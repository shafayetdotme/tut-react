import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* Functional components */}
      <Greet name="shafayet" shortName="SFT">
        <p>This is child of Shafayet</p>
      </Greet>
      <Greet name="kabir" shortName="KBR">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </Greet>
      <Greet name="shajib" shortName="SJB" />

      {/* Class components */}
      <Welcome name="shafayet" shortName="SFT">
        <p>This is child of Shafayet</p>
      </Welcome>
      <Welcome name="kabir" shortName="KBR">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </Welcome>
      <Welcome name="shajib" shortName="SJB"></Welcome>
    </div>
  );
}

export default App;
