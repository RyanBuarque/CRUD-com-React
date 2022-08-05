import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.jpg'

function Logo() {
  return (
    <aside className="logo">
        <Link to="/">
            <Img src={logo} alt="logo" />
        </Link>
    </aside>
  )
}

const Img = styled.img`
    height: 70px;
    weidth: 70px;
    border-radius: 50%;

    :hover {
      padding: 10px 10px
    }
`

export default Logo