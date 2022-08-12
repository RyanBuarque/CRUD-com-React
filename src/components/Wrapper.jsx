import React from 'react'
import styled from 'styled-components'

import Header from './template/Header'
import Nav from './template/Nav'
import Footer from './template/Footer'

function Wrapper(props) {
  const { children } = props
  return (
    <Grid className='container'>
      <Header />
      <Nav />
      {children}
      <Footer />
    </Grid>
  )
}

const Grid = styled.div`
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

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: var(--aside-width) 1fr;
    grid-template-rows:
      var(--header-height)
      1fr
      var(--footer-height);
    grid-template-areas:
      'header menu'
      'content content'
      'footer footer';
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
  }
`
export default Wrapper
