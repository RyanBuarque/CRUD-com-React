import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faGear,
  faArrowRightFromBracket,
  faList
} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'

function Nav() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Aside className="menu-area">
      <nav className="d-flex flex-column rounded-pill ms-4 p-3">
        <NavLink to="/home">
          <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>
        <NavLink to="/user">
          <FontAwesomeIcon icon={faUser} /> Perfil
        </NavLink>
        <NavLink to="/list">
          <FontAwesomeIcon icon={faList} /> List
        </NavLink>
        <NavLink to="/list">
          <FontAwesomeIcon icon={faGear} /> Config
        </NavLink>
        <Logout onClick={() => [signout(), navigate("/")]}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </Logout>
      </nav>
    </Aside>
  )
}

const Aside = styled.aside`
  margin-top: 10px;
  
  nav {
    background-color: #00adf1;
  }
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

const Logout = styled.a`
cursor: pointer;
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
