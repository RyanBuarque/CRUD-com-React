import React, { useState } from 'react'
import styled from 'styled-components'
import wallpaper from '../assets/wallpaper.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'

import FormLogin from "../components/FormLogin";
import FormCadastro from "../components/FormCadastro";

function Login() {

  return (
    <div>
      <LoginCard>
        <FormLogin display=""/>
        <FormCadastro display="d-none"/>
      </LoginCard>
    </div>
  )
}

const LoginCard = styled.div`
background: url(${wallpaper});
height: 100vh;
background-size: cover;
background-position: center;

:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.174);
}
`

export default Login
