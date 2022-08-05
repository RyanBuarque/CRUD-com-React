import React from 'react'
import Teste from '../components/Teste'
import Main from '../components/template/Main'

import userM from '../assets/userM.png'
import PropsTest from '../PropsTest'

function Perfil() {
  return (
    <Main>
        <Teste {...PropsTest()}/>
    </Main>
  )
}

export default Perfil