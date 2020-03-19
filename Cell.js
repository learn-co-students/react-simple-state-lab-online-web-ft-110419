import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props
        }
    }

    updateColor = () => {
        this.setState({
            color: '#333'
        })
    }
    render() {
        return <div className='cell' style={{backgroundColor: 'this.state.color'}}></div>
    }
}