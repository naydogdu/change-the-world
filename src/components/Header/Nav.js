import React from "react"
import { appDatas } from './../../data/constants'

const Nav = () => (
    <nav className="app-nav flex-shrink-0 sm:ml-auto">
        <ul className="flex tracking-widest uppercase font-bold text-xs space-x-2">
            {appDatas.nav.map( (item, i) => (
                <li key={i} className={"flex flex-col"}>
                    <a
                        href={item.url}
                        className={[
                            "transition py-2 px-4 bg-gray-700 bg-opacity-40 rounded",
                            "ring-gray-700 hover:bg-gray-900 hover:text-white focus:ring",
                        ].join(' ')}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
)

export default Nav
