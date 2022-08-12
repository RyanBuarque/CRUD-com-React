import React from 'react'
import styled from 'styled-components'

function Main(props) {
  return (
    <React.Fragment>
      <MainD className="content ms-5 ">
        <div className="bg-secondary p-2 m-2 rounded-5">
          {props.children}
        </div>
      </MainD>
    </React.Fragment>
  )
}

const MainD = styled.main`
  margin: 0 auto !important;
`

export default Main
