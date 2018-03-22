import React, { Component } from "react";
import Profiles from "./Profiles-Page/Profiles";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">Profilic</div>
        <Profiles />
      </div>
    );
  }
}

export default App;
