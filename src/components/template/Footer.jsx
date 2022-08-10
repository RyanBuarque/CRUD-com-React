import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="footer d-flex justify-content-center align-items-center">
      <Span>
        Desenvolvido por:
        <a
          href="https://github.com/RyanBuarque"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faUserPen} /> Ryan Buarque
        </a>
      </Span>
    </footer>
  )
}

const Span = styled.span`
  margin-left: 10px;

  a {
    text-decoration: none;
    color: #00adf1;
    margin-left: 5px;
    padding: 5px 10px;

    :hover {
      color: white;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 80px;
      transition: 0.2s;
    }
  }
`

export default Footer
