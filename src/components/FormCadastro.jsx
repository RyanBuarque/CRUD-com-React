import React, { useState } from 'react'
import styled from 'styled-components'
import wallpaper from '../assets/wallpaper.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'

function FormCadastro(props) {
  const [form, setForm] = useState({ username: '', password: '' })

  function changeForm(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  function submitForm(e) {
    e.preventDefault()
    setForm({username: '', password: ''})
  }

  return (
    <div>
      <LoginCard className={props.display}>
        <div className="content">
          <header>Sobre</header>
          <form onSubmit={submitForm}>
            <div className="field">
              <FontAwesomeIcon icon={faUser} className="bg-danger" />
              <input
                onChange={changeForm}
                type="text"
                name="username"
                value={form.username}
                placeholder="Usuário"
                required
              />
            </div>
            <div className="field space">
              <FontAwesomeIcon icon={faKey} className="bg-danger" />
              <input
                onChange={changeForm}
                type="password"
                name="password"
                value={form.password}
                className="pass-key"
                required
                placeholder="Senha"
              />
              <span className="show bg-danger fs-1">SHOW</span>
            </div>
            <div className="field">
              <input type="submit" value="submit" />
            </div>
          </form>
            <div>
              <a>Cadastrar</a>
            </div>
        </div>
      </LoginCard>
    </div>
  )
}

const LoginCard = styled.div`

  .content {
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    text-align: center;
    padding: 60px 32px;
    width: 370px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.133);
    border: 1px solid #fff;
    backdrop-filter: blur(3px);
    box-shadow: 0 0 6px e rgba(29, 29, 29, 0.203);
  }

  .content header {
    color: white;
    font-size: 33px;
    font-weight: 600;
    margin: 0 0 35px 0;
    font-family: 'Montserrat', sans-serif;
  }

  .field {
    position: relative;
    height: 45px;
    width: 100%;
    display: flex;
    background: rgba(255, 255, 255, 0.94);
  }

  .field i {
    color: #222;
    width: 40px;
    line-height: 45px;
  }

  .field input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: RGB(75, 65, 88);
  }

  .space {
    margin: 16px 0;
  }

  .show {
    position: absolute;
    right: 13px;
    font-size: 13px;
    font-weight: 700;
    color: #222;
    display: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .field input[type='submit'] {
    background: rgba(255, 255, 255, 0.94);
    border: 1px solid #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    transition: 0.3s ease;
  }

  .field input[type='submit']:hover {
    background: RGB(75, 65, 88);
    border: 1px solid #ffffff;
    color: #ffffff;
  }

  .login {
    color: white;
    margin: 20px 0;
    font-family: 'Poppins', sans-serif;
  }

  i {
    margin-left: 8px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;
  }
`

export default FormCadastro
