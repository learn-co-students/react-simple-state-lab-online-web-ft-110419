import React, { Component } from 'react';
import Cell from './cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>)
  }

  static genDefault = () => {
    let val = "#F00"
    let array = []
    for (let i=0; i<10; i++) {
      array[i] = []
      for (let j=0; j<10; j++) {
        array[i][j] = val
      }
    }
    return array
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

  static defaultProps = {
    values: Matrix.genDefault()
  }
  
}
