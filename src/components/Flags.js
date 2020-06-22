import React from "react";
import Flag from "./Flag";

/*{props.flags.map(flag => <Flag key={flag.name} {...flag} />)}*/
const Flags = props => {
  return (
    <div className="flex flex-wrap flex-1">
      {props.flags.map(flag => <Flag key={flag.name} {...flag} />)}
    </div>
  );
};

export default Flags;
