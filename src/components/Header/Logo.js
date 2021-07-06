import React from "react"
import {appDatas} from '../../data/constants'

const Logo = () => {
  return (
    <div className={"flex-shrink-0 py-4 font-black flex items-center lg:px-px"}>
      <a
          title={appDatas.intro}
          href="/"
          className={"text-center hover:text-white lg:pl-5"}
      >
          {appDatas.title}
      </a>
    </div>
  )
}

export default Logo
