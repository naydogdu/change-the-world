import React from "react";
import Flag from "./Flag";

/*{props.flags.map(flag => <Flag key={flag.name} {...flag} />)}*/
const Flags = props => {
  console.log(props.flags)
  return (
    <div className="flex flex-wrap flex-1">
      {Object.keys(props.flags).map((item, i) => (
        <Flag key={i} {...props.flags[item]} />
      ))}
    </div>
  );
};

export default Flags;
