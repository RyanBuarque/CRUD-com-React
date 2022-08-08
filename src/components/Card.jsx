import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faComment,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons'
import ColapseCard from './ColapseCard'

function Card(props) {

  function iconesPrincipalCard() {
    return (
      <>
      
      <a
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-warning"
                    />
                  </a>
                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon
                      icon={faAlignJustify}
                      className="text-warning"
                    />
                  </a>
      </>
    )
  }

  return (
    <div>
      <Coment className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <img src={props.fotoPerfil} alt="Foto do perfil" />
          </div>
          <div className="col-md-8">
            <div className="card-body text-dark text-start">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
              {props.conteudo}
              </p>
              <div className="d-flex justify-content-between">
                <p className="card-text m-0">
                  <small className="text-muted">{props.time}</small>
                </p>
                <div className="me-5 d-flex col-3 justify-content-around align-items-center">
                  <FontAwesomeIcon icon={faHeart} className="text-warning" />
                  
                  {props.principalCard ? iconesPrincipalCard() : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.principalCard ? <ColapseCard /> : ''}
      </Coment>
    </div>
  )
}

const Coment = styled.div`
  max-width: 600px;

  img {
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #00adf1;
  }
`

export default Card