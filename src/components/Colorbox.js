import React from "react"

const Colorbox = props => {

    return (
        <input
            type="text"
            className={[
                'w-full bg-gray-800 bg-opacity-50 text-gray-300 rounded',
                'text-center font-bold placeholder-opacity-50',
                'hover:bg-opacity-75 focus:bg-gray-900 focus:outline-none',
            ].join(' ')}
            {...props}
        />
    )
}

export default Colorbox
