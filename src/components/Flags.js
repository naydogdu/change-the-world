import React from "react"
import Flag from "./Flag"
import {flagComponents} from "../data/flags"
import data from "../data/countries.json"

const Flags = () => {

  return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 place-content-center">
          {Object.keys(flagComponents).map((item, i) => (
              <Flag
                  key={i}
                  svg={flagComponents[item]}
                  name={data[item.toUpperCase()]}
              />
          ))}
      </div>
  )
}

export default Flags
