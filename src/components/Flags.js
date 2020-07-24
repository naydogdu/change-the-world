import React from "react"
import Flag from "./Flag"

const Flags = props => {
  return (
    <div className="grid gap-4 place-center grid-auto-fit">
      {Object.keys(props.flags).map((item, i) => (
        <Flag key={i} fn={ props.flags[item] } />
      ))}
    </div>
  )
}

export default Flags
