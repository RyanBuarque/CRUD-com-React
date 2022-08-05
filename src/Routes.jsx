import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Perfil from './pages/Perfil'


function Rotas() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/user' element={<Perfil />} />
        </Routes >
    )
}

export default Rotas
