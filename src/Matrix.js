import React, { Component } from 'react';
import Cell from './Cell.js'

class Matrix extends Component {
  
  genRow = (vals) => {
    // console.log(vals)

    // For Each vals creates .map, create a new cell instance and render the cell 
    vals.map(element => <Cell value={element} />)
  }
  
  genMatrix = () => {
    // console.log(this.props.values)
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    // console.log(this)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: (() => {
    const array =  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return new Array(10).fill(array)
  })()
}

export default Matrix
