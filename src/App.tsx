import React, { useState } from "react";
import "./App.css";
import { Grid } from "./Components/Grid";
import Aircraft_Carrier from "./Images/Aircraft_Carrier.png";

function App() {
  const [shipDirection, setShipDirection] = useState("horizontal");

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="flex-container"
          style={{ width: "100%", maxWidth: "1600px" }}
        >
          <Grid color={"#72f7a1"} player={"Opponent"} ships={[]} />
          <Grid color={"#419ad9"} player={"Mine"} ships={[]} />
        </div>
        <br />
        <br />
        <br />
        <button>Place Ship</button>
        <button>Rotate</button>
      </header>
    </div>
  );
}

export default App;
