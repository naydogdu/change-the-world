import React from "react"
import Container from "./Container"
import Logo from "./Header/Logo"
import Nav from "./Header/Nav"
import SearchForm from "./SearchForm"

const Header = () => {
    return (
        <header role="banner" className="sticky top-0 z-50 bg-gray-800 text-gray-200 shadow-lg">
            <Container add="px-4 flex flex-col items-center sm:flex-row sm:items-stretch sm:space-x-8 md:space-x-4">
                <Logo />
                <div className={"w-full flex flex-col-reverse space-y-reverse py-4 space-y-4 sm:space-y-0 items-center sm:flex-row md:border-l md:border-gray-700 md:border-opacity-50 md:pl-2"}>
                    <SearchForm />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}

export default Header
