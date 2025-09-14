import React from "react";
import "./App.css";
import { Grid } from "./Components/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid color={"#72f7a1"} changeColorOnHover={true} />
        <Grid color={"#419ad9"} changeColorOnHover={false} />
      </header>
    </div>
  );
}

export default App;
