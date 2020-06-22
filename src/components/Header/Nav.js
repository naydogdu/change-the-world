import React from "react";
import { appDatas } from './../../data/constants';

const Nav = () => {
  return (
    <nav className="app-nav ml-auto">
      <ul className="flex space-x-8">
        { appDatas.nav.map( item => <li key={item.name}><a href={item.url}>{item.name}</a></li> ) }
      </ul>
    </nav>
  )
}

export default Nav;
