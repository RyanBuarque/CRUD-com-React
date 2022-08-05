import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSearch, faGear, faArrowRightFromBracket, faArrowRightToBracket  } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <Aside className="menu-area rounded-pill ms-4 mb-3 p-3 d-flex">
      <nav className="flex-fill d-flex flex-column bg-warning">
        <NavLink to="/">
          <FontAwesomeIcon icon={faArrowRightToBracket}/> Login
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon icon={faSearch}/> Search
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon icon={faGear}/> Config
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome}/> Home
        </NavLink>
        <NavLink to="/user">
          <FontAwesomeIcon icon={faUser} /> Perfil
        </NavLink>
        <NavLink to="/user">
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </NavLink>
      </nav>
    </Aside>
  )
}

const Aside = styled.aside`
  background-color: #00adf1;
`
const NavLink = styled(Link)`
  margin: 10px 0;
  text-decoration: none;
  color: white;

  :hover {
    color: white;
    transition: 0.2s;
    filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
  }
`

export default Nav
