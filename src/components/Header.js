import React from "react"
import Container from "./Container"
import Logo from "./Header/Logo"
import Nav from "./Header/Nav"
import Searchform from "./Searchform"

const Header = () => {
  return (
    <header role="banner" className="bg-white shadow py-2">
      <Container add="px-4 flex items-center">
        <Logo />
        <Nav />
      </Container>
      <Container add="p-4 mt-8 flex items-center">
        <Searchform />
      </Container>
    </header>
  )
}

export default Header
