import React from "react"
import { appDatas } from './../../data/constants'

const Nav = () => {
  return (
    <nav className="app-nav ml-auto">
      <ul className="flex tracking-widest uppercase font-black text-xs space-x-2">
        {appDatas.nav.map( item => (
            <li key={item.name}>
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
}

export default Nav
