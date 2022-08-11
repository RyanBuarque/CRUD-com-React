import React from 'react'

function Main(props) {
  return (
    <React.Fragment>
      <main className="content ms-5 ">
        <div className="bg-secondary p-2 m-2 rounded-5">
          {props.children}
        </div>
      </main>
    </React.Fragment>
  )
}

export default Main
