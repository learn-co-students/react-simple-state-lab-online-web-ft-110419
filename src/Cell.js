import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        /*to call super() on the first line of 
        the constructor (this is required in 
        React components if we are to use this.state 
        in the constructor)*/
        this.state = {
            color: this.props.value
        }
    }

    handleClik = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.handleClik}></div>
        )
    }
}