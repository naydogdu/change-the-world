import React, { Component } from "react"

class Flag extends Component {
  render() {
    const FlagName = this.props.fn
    return (
      <div className="flag w-40 p-5 my-2 bg-white rounded-lg shadow">
        <div className="shadow rounded-lg overflow-hidden">
          <FlagName />
        </div>
      </div>
    )
  }
}

export default Flag
