import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Wrapper from './components/Wrapper'
import useAuth from './hooks/useAuth'
import Signup from './pages/Singup'

const Private = ({ Item }) => {
  const { signed } = useAuth();

  if (signed) {
    return (
      <Wrapper>
        <Item />
      </Wrapper>
    )
  }
  return <Login />
}

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/home" element={<Private Item={Home} />} />
      <Route exact path="/user" element={<Private Item={Perfil} />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default Rotas
