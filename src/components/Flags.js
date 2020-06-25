import React from "react"
import Flag from "./Flag"

/*{props.flags.map(flag => <Flag key={flag.name} {...flag} />)}*/
const Flags = props => {
  return (
    <div className="flex flex-wrap flex-1 justify-between">
      {Object.keys(props.flags).map((item, i) => (
        <Flag key={i} fn={ props.flags[item] } />
      ))}
    </div>
  )
}

export default Flags
