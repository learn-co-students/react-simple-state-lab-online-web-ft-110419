import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        console.log(props)
        super()
        this.state  = { color: this.props.value }  //...define initial state with a key of 'color' set to the 'value' prop
    }

    render() {
        console.log(this)
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.setState({ color:  '#333'})}></div>
        )
    }
}