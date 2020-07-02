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

  handleChangeColor = e => {
    let newState = Object.assign({}, this.state)
    const i = e.target.getAttribute('data-key')
    newState.colors[i] = e.target.value
    this.setState(newState)
  }

  handleChangeStyleOnFocus = () => this.setState({
    focused: true
  })

  handleChangeStyleOnBlur = () => this.setState({
    focused: false
  })

  generateColorboxes = () => {
    let boxes = []
    for (let i = 1; i <= Object.keys(this.state.colors).length; i++)
      boxes.push(
        <div key={i}>
          <Colorbox
            dataKey={i}
            value={this.state.colors.i}
            onChangeColor={this.handleChangeColor}
            onFocus={this.handleChangeStyleOnFocus}
            onBlur={this.handleChangeStyleOnBlur}
            holder={"Color "+ i }
          />
        </div>
      )
    return boxes
  }

  render() {
    const FlagName = this.props.fn
    return (
      <div className={'flag-wrapper w-40 p-5 my-2 bg-white rounded-lg shadow'+(this.state.focused ? ' focused' : '')}>
        <div data-color={this.state.color} className="flag-item shadow rounded-lg overflow-hidden transition-all duration-200 delay-100">
          <FlagName />
        </div>
        {this.generateColorboxes()}
      </div>
    )
  }
}

export default Flag
