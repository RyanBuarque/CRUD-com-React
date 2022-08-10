import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Main from '../components/template/Main'
import Input from '../components/Input'
import useAuth from '../hooks/useAuth'
import { faKey, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Login() {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  function handleLogin() {
    if (!email | !senha) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(email, senha)

    if (res) {
      setError(res)
      return
    }

    navigate('/home')
  }

  return (
    <FormLogin className="d-flex justify-content-center align-items-center">
      <Main>
        <form className="d-flex flex-column align-items-center p-4">
          <legend>Login</legend>
          <div className="d-flex align-items-center my-3">
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              className="form-control"
              onChange={(e) => [setEmail(e.target.value), setError('')]}
            />
            <label htmlFor="nome" className="form-label">
              <FontAwesomeIcon icon={faUser} className="mt-3 ms-2 fs-5" />
            </label>
          </div>
          <div className="d-flex align-items-center my-3">
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              className="form-control"
              onChange={(e) => [setSenha(e.target.value), setError('')]}
            />
            <label htmlFor="senha" className="form-label">
              <FontAwesomeIcon icon={faKey} className="mt-3 ms-2 fs-5" />
            </label>
          </div>
          <label>{error}</label>
          <div>
            <button
              className="btn d-flex align-items-center"
              onClick={handleLogin}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Entrar
            </button>
          </div>
        </form>
        <label>
          Não tem uma conta?
          <NavLink to="/signup">&nbsp;Registre-se</NavLink>
        </label>
      </Main>
    </FormLogin>
  )
}

const FormLogin = styled.div`
  height: 100vh;

  Main {
    margin: 0 auto !important;
  }

  button {
    margin: 10px 0;
    text-decoration: none;
    color: black;

    :hover {
      color: white;
      transition: 0.5s;
      filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
    }
  }
`

const NavLink = styled(Link)`
  margin: 10px 0;
  text-decoration: none;
  font-weight: 400;
  color: black;

  :hover {
    color: white;
    transition: 0.2s;
    filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
  }
`

export default Login
