import React from "react"

class Colorbox extends React.Component {
  render() {
    return (
      <div className={'pt-2 transition-all duration-200 delay-150'}>
        <input type="text"
               className={'w-full text-center font-bold placeholder-black placeholder-opacity-50'}
               value={this.props.value}
               data-key={this.props.dataKey}
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
