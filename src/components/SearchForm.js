import React from "react"

const SearchForm = () => {

    return (
        <form className="w-full sm:px-2 md:w-64 flex flex-col">
            <label className="sr-only" htmlFor="search-flag">
                Search for a flag
            </label>
            <input
                id="search-flag"
                className="w-full rounded bg-gray-700 bg-opacity-40 rounded sm:text-xs p-4 sm:py-2 ring-gray-700 focus:ring focus:outline-none"
                type="search"
                placeholder="Search for a flag..."
            />
        </form>
    )
}

export default SearchForm
