import React, { Component } from "react";
import { css, StyleSheet } from 'aphrodite';

export default class extends Component {
  render() {
      const classes = StyleSheet.create({
          container:{
            position:"absolute",
            width:"30px",
            height:"30px",
            borderRadius:"30px",
            border:"3px solid wheat",
            overflow:"hidden"
          }
      })
    const { name } = this.props.char;
    return (
      <div className={css(classes.container)}>
        { name }
      </div>
    );
  }
}
