import React from 'react'

class Cell extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super()
      this.state = {
        color: props.value
      }
    }
   
    handleClick = () => {
        this.setState({color: '#333'})

    }

    render() {
        // console.log(this)
        return (
            <div 
            className="cell" 
            // onClick={this.handleClick} 
            style={{backgroundColor: this.state.color}} >
            </div>
        )
    }
  }
  
  export default Cell