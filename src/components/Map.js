import React, { Component } from "react";
import Characters from "./Characters";
import { css, StyleSheet } from "aphrodite";

export default class Map extends Component {
  render() {
    const classes = StyleSheet.create({
      container: {
        position: "relative",
        width: "300px",
        height: "300px",
        border: "1px solid black"
      }
    });

    return (
      <div className={css(classes.container)}>
        <Characters />
      </div>
    );
  }
}
