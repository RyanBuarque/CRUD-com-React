import React from 'react'
import Header from './template/Header'
import Nav from './template/Nav'
import styled from 'styled-components'
import Footer from './template/Footer'

function Wrapper(props) {
  const { children } = props
  return (
    <Arroz>
      <Header />
      <Nav />
      {children}
      <Footer />
    </Arroz>
  )
}

const Arroz = styled.div`

    display: grid;
    grid-template-columns: var(--aside-width) 1fr;
    grid-template-rows:
      var(--header-height)
      1fr
      var(--footer-height);
    grid-template-areas:
      'header content'
      'menu content'
      'menu footer';
    min-height: 100vh;


  aside.menu-area {
    grid-area: menu;
  }

  header.header {
    grid-area: header;
  }

  main.content {
    grid-area: content;
  }

  footer.footer {
    grid-area: footer;
  }
`
export default Wrapper
