import React, { Component } from "react";
import Character from "./Character";

const chars = {
    char1: {
        name: "C1"
    },
    char2: {
        name: "C2"
    }
}

export default class extends Component {
  render() {
    return (
      <div>
        <Character char = {chars.char1}/>
        <Character char = {chars.char2}/>
      </div>
    );
  }
}
