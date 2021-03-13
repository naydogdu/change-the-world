import React from "react"

const Container = props => {
  return (
    <div className={[props.add,'rounded mx-auto max-w-4xl'].join(' ')}>
      {props.children}
    </div>
  )
}

export default Container
