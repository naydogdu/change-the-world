import React, { Component } from "react"
import Colorbox from "./Colorbox"

class Flag extends Component {
  constructor() {
    super();
    this.state = {
      colors : {
        1: '',
        2: '',
        3: ''
      },
      focused: false
    }
  }

  handleChangeColor = (i,e) => {
    let newState = Object.assign({}, this.state)
    newState.colors[i] = e.target.value
    this.setState(newState)
  }

  handleChangeStyle = () => this.setState({
    focused: !this.state.focused
  })

  generateColorboxes = () => {
    let boxes = []
    
    for (let i = 1; i <= Object.keys(this.state.colors).length; i++)
      boxes.push(
        <li key={i}>
          <Colorbox
            value={this.state.colors.i}
            onChangeColor={(e) => this.handleChangeColor(i,e)}
            onFocus={this.handleChangeStyle}
            onBlur={this.handleChangeStyle}
            holder={"Color "+ i }
          />
        </li>
      )
      
    return (
      <ul className="transition-all duration-200 delay-200">
        {boxes}
      </ul>
    )
  }

  render() {
    const FlagName = this.props.fn

    return (
      <div className={[
          'flag-wrapper overflow-hidden w-40 p-5',
          'bg-gray-800 rounded-lg shadow-lg',
          (this.state.focused ? 'focused' : '')
      ].join(' ')}>
        <div
            data-color={this.state.color}
            className="flag-item shadow rounded-lg overflow-hidden transition-all duration-200 delay-100"
        >
          <FlagName />
        </div>
        {this.generateColorboxes()}
      </div>
    )
  }
}

export default Flag
