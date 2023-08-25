import type { Component } from 'solid-js';
import Logo from '../assets/logo.svg'

const Header: Component = () => {
  return <header>
    <img src={Logo} alt="Solid JS Logo"/>
    <h1>Hello All</h1>
  </header>
}

export default Header;