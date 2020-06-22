import React from "react";
import { appDatas } from './../../data/constants';

const Logo = () => {
  return (
    <div className="py-4 font-black">
      <a title={appDatas.intro} href="/">{appDatas.title}</a>
    </div>
  )
}

export default Logo;
