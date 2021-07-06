import React from "react"

const Container = props => {
    return (
        <div className={[props.add,'mx-auto max-w-screen-lg'].join(' ')}>
            {props.children}
        </div>
    )
}

export default Container
