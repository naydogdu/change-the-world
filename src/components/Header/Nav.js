import React from "react";
import { appDatas } from './../../data/constants';

const Nav = () => {
  return (
    <nav className="app-nav">
      <ul>
        { appDatas.nav.map( item => <li><a href={item.url}>{item.name}</a></li> ) }
      </ul>
    </nav>
  )
}

export default Nav;
