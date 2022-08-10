import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/logo.jpg'

function Header() {
  return (
    <Title className="header">
      <aside className="logo">
        <Link to="/home">
          <Img src={logo} alt="logo" />
        </Link>
      </aside>
    </Title>
  )
}

const Title = styled.header`
  margin: 10px 0 10px 30px;
  display: flex;
  justify-content: space-between;
`

const Img = styled.img`
  height: 70px;
  weidth: 70px;
  border-radius: 50%;

  :hover {
    padding: 10px 10px;
  }
`

export default Header
