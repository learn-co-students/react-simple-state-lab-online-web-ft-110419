import React, { Component } from "react";
import Cell from "./Cell";

export default class Matrix extends Component {
  defaultRedArry() {
    let colorsRow = new Array(10).fill("#F00");
    return new Array(10).fill(colorsRow);
  }

  genRow = vals => {
    return vals.map(val => <Cell value={val} />); // replace me and render a cell component instead!
  };

  genMatrix = () => {
    return this.props.values.map(rowVals => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: (() => {
    let colorsRow = new Array(10).fill("#F00");
    return new Array(10).fill(colorsRow);
  })()
};
