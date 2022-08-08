import React, { useState } from 'react'
import Card from '../components/Card'
import Main from '../components/template/Main'
import PropsTest from '../PropsTest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import List from './List'
import { addComentario } from '../store/comentarios'
import { useDispatch } from 'react-redux'

function Home() {
  const [form, setForm] = useState({ comentario: '' })
  const dispatch = useDispatch();
  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addComentario(form))
    setForm({ comentario: '' })
  }

  return (
    <Main>
      <div>
        <hr />
        <SeuComent className="bg-danger">
          <form
            onSubmit={onSubmit}
            className="d-flex align-items-center mx-3 flex-fill"
          >
            <label htmlFor="seuComentario">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="fs-5 text-dark p-2"
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
            <button type="submit" className="btn">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="fs-5 text-dark p-2"
              />
            </button>
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
  margin-left: 30px;
  textarea {
    max-width: 600px;
    height: 100px;
  }
`

export default Home
