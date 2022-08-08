import React from 'react'
import Card from './Card'
import PropsTest from '../PropsTest'

function ColapseCard() {

  return (
    <div>
          <div className="collapse" id="collapseExample">
          <div className="card card-body bg-secondary m-2">
            <div className="bg-white text-dark">
              <p>AQUIII</p>
            </div>
          </div>
        </div>
        <div className="collapse " id="collapseExample2">
            <div className="card card-body text-dark bg-secondary m-2">

            <Card {...PropsTest(false)}/>
            <Card {...PropsTest(false)}/>
            <Card {...PropsTest(false)}/>
            </div>
        </div>
    </div>
  )
}

export default ColapseCard