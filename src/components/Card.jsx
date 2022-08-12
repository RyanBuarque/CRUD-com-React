import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { removePost } from '../store/reducers/post'
import { useDispatch } from 'react-redux'
import useAuth from '../hooks/useAuth'


function Card(props) {
  const dispatch = useDispatch()
  const { user } = useAuth()

  function remove(e) {
    e.preventDefault()
    dispatch(removePost(props.id))
    return alert('removido')
  }

  return (
      <Coment className="card mb-3 bg-danger">
        <div className="row g-0">
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <img src={props.fotoPerfil} alt="Foto do perfil" />
          </div>
          <div className="col-md-8">
            <div className="card-body text-dark text-start">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.conteudo}</p>
              <div className="d-flex justify-content-between">
                <p className="card-text m-0">
                  <small className="text-muted">{props.time}</small>
                </p>
                <div className="me-5 d-flex col-3 justify-content-around align-items-center">
                  <button className="btn border-0">
                    <FontAwesomeIcon icon={faHeart} className="text-warning" />
                    <span className="ms-2">{props.countLikes}</span>
                  </button>
                  {user.email === props.title ? (
                    <button className="btn border-0" onClick={remove}>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-warning"
                      />
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Coment>
  )
}

const Coment = styled.div`
  @media (min-width: 768px) {
    max-width: 600px;
    min-width: 600px;
  }
  img {
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: white;
  }
`

export default Card
