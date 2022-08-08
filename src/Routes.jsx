import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Wrapper from './components/Wrapper'
import List from './pages/List'

function Rotas() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Wrapper>
            <Home />
          </Wrapper>
        }
      />
      <Route
        exact
        path="/list"
        element={
          <Wrapper>
            <List />
          </Wrapper>
        }
      />
      <Route path="/user" element={<Perfil />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

// wrapper

export default Rotas
