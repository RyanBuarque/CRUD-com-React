import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

function Header() {
  return (
    <Title id="header">
        <Logo />
    </Title>
  )
}

const Title = styled.header`
  margin-top: 10px;
  margin-left: 30px;
`

export default Header