import React from "react"

const Searchform = props => {
  return (
    <form className="w-full block">
      <label className="sr-only" htmlFor="search-flag">Search for a flag</label>
      <input id="search-flag" className="w-full block text-2xl text-center" type="search" placeholder="Need a flag in particular ?" />
    </form>
  )
}

export default Searchform