import React, { Component } from 'react';
import TheDate from "./state/TheDate";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";

class App extends Component {
  render() {
    return (
        <RouletteGun />
    );
  }
}

export default App;
