import React, { Component } from "react";
import Character from "./Character";

const chars = {
    char1: {
        name: "C1",
        positions:[

        ]
    },
    char2: {
        name: "C2",
        positions:[]
    }
}
var i;
for( i = 0; i < 8000; i++ ){
  if(i<7000){
    chars.char1.positions.push({x:50 , y: 50})
  }
  else{
    const delta = i-7000
    chars.char1.positions.push({x:50+delta, y: 50+delta})
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
