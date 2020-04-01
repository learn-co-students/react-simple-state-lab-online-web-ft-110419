import React, { Component } from 'react';
import { pattern1 } from './data.js';
import Matrix from "./Matrix"
export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    colors = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div className="cell" onClick={this.colors} style={{ backgroundColor: this.state.color }}>
                click Me!
            </div>
        )
    }
}