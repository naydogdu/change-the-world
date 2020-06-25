import React from "react"
import Container from "./Container"
import Logo from "./Header/Logo"
import Nav from "./Header/Nav"

const Header = () => {
  return (
    <header role="banner" className="bg-white shadow-lg py-2">
      <Container add="px-4 flex items-center">
        <Logo />
        <Nav />
      </Container>
    </header>
  )
}

export default Header
