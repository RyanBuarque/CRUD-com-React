import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Main from '../components/template/Main'
import List from './List'
import { addComentario } from '../store/comentarios'
import useAuth from '../hooks/useAuth'
import userM from '../assets/userM.png'

function Home() {
  const [form, setForm] = useState({ comentario: '' })
  const { user  } = useAuth();
  const [cardC, setCardC] = useState({
    fotoPerfil: userM,
    title: user.email,
    conteudo: '',
    time: 'Now',
    principalCard: true,
  })
  
  const dispatch = useDispatch();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    cardC.conteudo = form.comentario
    setCardC(cardC)
  }

  function onSubmitComentario(e) {
    e.preventDefault()
    dispatch(addComentario(cardC))
    setForm({ comentario: '' })
  }

  return (
    <Main>
      <div className="d-flex justify-content-center">
        <hr />
        <SeuComent>
          <form
            onSubmit={onSubmitComentario}
            className="d-flex align-items-center justify-content-center"
          >
            <label htmlFor="seuComentario">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="fs-5 me-4 text-dark p-2"
              />
            </label>
            <textarea
              className="form-control border-0"
              id="seuComentario"
              placeholder="Digite seu comentario aqui"
              onChange={formChange}
              name="comentario"
              value={form.comentario}
            />
            <Button type="submit" className="btn border-0">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="fs-5 p-2"
              />
            </Button>
          </form>
        </SeuComent>
      </div>

      <hr />
      <div className="d-flex flex-column align-items-center">
        <List />
      </div>
    </Main>
  )
}

const SeuComent = styled.div`
  width: 100%;
  
  form {
    margin: 0 auto;
  }

  textarea {
    max-width: 600px;
    height: 100px;
  }
`

const Button = styled.button`
margin: 10px 0;
text-decoration: none;
color: black;

:hover {
  color: white;
  transition: 0.5s;
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
}
`

export default Home
