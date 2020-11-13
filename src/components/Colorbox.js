import React from "react"

class Colorbox extends React.Component {
  render() {
    return (
      <div className={'colorbox pt-2 transition-all duration-200'}>
        <input 
          type="text"
          className={'w-full bg-indigo-900 bg-opacity-50 text-indigo-200 rounded text-center font-bold placeholder-opacity-50'}
          value={this.props.value}
          placeholder={this.props.holder}
          onChange={this.props.onChangeColor}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
      </div>
    )
  }
}

export default Colorbox
