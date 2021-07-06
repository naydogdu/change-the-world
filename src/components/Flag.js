import React, {useEffect, useRef, useState} from "react"
import Colorbox from "./Colorbox"

const Flag = props => {
    const FlagName = props.svg
    const flagContainer = useRef(null)

    const [active, setActive] = useState(false)
    const [focused, setFocused] = useState(false)
    const [colors, setColors] = useState({})

    const handleActive = () => {
        browseNode(flagContainer.current)
        setActive(!active)
    }

    const handleChange = (i,e) => {
        console.log('handleChangeColor', i, e.target)

        Array.from(flagContainer.current.querySelectorAll(`[data-fill="${e.target.name}"]`)).map((el) => {
            console.log(el.fill)
            el.setAttribute('fill', e.target.value)
        })

        Array.from(flagContainer.current.querySelectorAll(`[data-stroke="${e.target.name}"]`)).map((el) => {
            el.setAttribute('stroke', e.target.value)
        })

        setColors((keep) => ({
            ...keep,
            [e.target.name]: e.target.value
        }))
    }

    const browseNode = (node) => {
        [...node.attributes].map((attr) => {
            if(attr.name === 'fill' || attr.name === 'stroke') {
                node.dataset[attr.name] = attr.value
                setColors((keep) => ({
                    ...keep,
                    [attr.value]: attr.value
                }))
            }
        })
        if( node.childNodes.length > 0 ) {
            [...node.childNodes].map((el,i) => {
                return browseNode(el)
            })
        }
    }

    return (
        <div
            className={[
                "relative flex flex-col p-5 pb-3 bg-gray-800 rounded-lg transform",
                (active ? "shadow-4xl -translate-y-px" : "shadow-lg"),
            ].join(' ')}
        >
            <button
                className={[
                    "transform flex-shrink-0 rounded-lg overflow-hidden",
                    "transition-all ring-gray-900 focus:outline-none focus:ring-4",
                    (active ? "shadow-3xl -translate-y-16 hover:-translate-y-12" : "shadow hover:-translate-y-1"),
                ].join(' ')}
                onClick={() => handleActive()}
                ref={flagContainer}
            >
                <FlagName />
            </button>
            {active &&
                <ul className="transition-all duration-200 delay-200">
                    {Object.entries(colors).map((el,i) => (
                        <li key={i} className={"pt-2 transition-all duration-200"}>
                            <Colorbox
                                name={el[0]}
                                value={el[1]}
                                onChange={(e) => handleChange(i,e)}
                                placeholder={["Color", el[1]].join(' ')}
                            />
                        </li>
                    ))}
                </ul>
            }
            <p
                className={[
                    "text-left pt-2 text-gray-300 mt-auto sm:text-xs truncate transition transform",
                ].join(' ')}
            >
                {props.name}
            </p>
        </div>
    )
}

export default Flag

