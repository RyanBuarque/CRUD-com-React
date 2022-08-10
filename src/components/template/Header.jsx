import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Search from '../Search'


function Header() {
  return (
    <Title className="header">
        <Logo />
        {/* <Search /> */}
    </Title>
  )
}

const Title = styled.header`
  margin: 10px 0 10px 30px;
  display: flex;
  justify-content: space-between;
`

export default Header