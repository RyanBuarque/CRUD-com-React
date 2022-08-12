import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHome,
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'

function Nav() {
  const { signout } = useAuth()
  const navigate = useNavigate()

  return (
    <Aside className="menu-area">
      <nav className="d-flex flex-column rounded-pill ms-4 p-3">
        <NavLink to="/home">
          <FontAwesomeIcon icon={faHome} /> <span>Home</span>
        </NavLink>
        <NavLink to="/user">
          <FontAwesomeIcon icon={faUser} /> <span>Perfil</span>
        </NavLink>
        {/* <NavLink to="/#" className="text-danger">
          <FontAwesomeIcon icon={faList} /> <span>List</span>
        </NavLink>
        <NavLink to="/#" className="text-danger">
          <FontAwesomeIcon icon={faGear} /> <span>Config</span>
        </NavLink> */}
        <Logout onClick={() => [signout(), navigate('/')]}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> <span>Logout</span>
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

  @media (max-width: 800px) {
    nav {
      flex-direction: row !important;
      justify-content: space-evenly;
      padding: 4px !important;
      margin: 0 20px !important;
    }
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

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
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

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

export default Nav
