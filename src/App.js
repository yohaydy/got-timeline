import React, { Component } from "react";
import Map from "./components/Map";
import EpisodeRange from './components/EpisodeRange'

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <EpisodeRange/>
      </div>
    );
  }
}

export default App;
