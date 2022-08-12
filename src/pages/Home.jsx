import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPenToSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { addPost } from '../store/reducers/post'
import Main from '../components/template/Main'
import List from '../components/List'
import useAuth from '../hooks/useAuth'
import perfil from '../assets/perfil.png'

function Home() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ comentario: '' })
  const { user } = useAuth()
  const inicialState = {
    fotoPerfil: perfil,
    title: user.email,
    conteudo: '',
    time: 'Now',
    principalCard: true,
  }
  const [cardC, setCardC] = useState(inicialState)

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSubmitComentario(e) {
    e.preventDefault()
    if (!form.comentario) {
      return alert('Seu comentario está vazio, digite algo')
    }
    cardC.conteudo = form.comentario
    setCardC(cardC)
    dispatch(addPost(cardC))
    setForm({ comentario: '' })
    setCardC(inicialState)
    return
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
              <FontAwesomeIcon icon={faPenToSquare} className="fs-5" />
            </label>
            <textarea
              className="form-control mx-4 border-0"
              id="seuComentario"
              placeholder="Digite seu comentario aqui"
              onChange={formChange}
              name="comentario"
              value={form.comentario}
            />
            <Button type="submit" className="btn btn-primary border-0">
              <FontAwesomeIcon icon={faPaperPlane} className="fs-5 p-2" />
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

    label {
      padding: 0 20px;
    }
  }

  textarea {
    max-width: 600px;
    height: 100px;
  }
`

const Button = styled.button`
  :hover {
    background-color: blue;
    transition: 0.2s;
    filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
  }
`

export default Home
