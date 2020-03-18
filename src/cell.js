import React, { Component } from 'react'

export default class Cell extends Component {
	state = {
		color: this.props.value
	}

	click = () => {
		this.setState({color: "#333"})
	}

	render() {
		return (
			<div className="cell" onClick = {this.click} style = {{backgroundColor: this.state.color}}>
			</div>
		)
	}
}