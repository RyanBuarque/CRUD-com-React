import React from 'react'
import Main from '../components/template/Main'
import styled from 'styled-components'
import userM from '../assets/userM.png'
import useAuth from '../hooks/useAuth'

function Perfil() {
  const { user } = useAuth()

  return (
    <Main>
      <Coment className="d-flex justify-content-center">
        <div className="row g-0 flex-fill">
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <img src={userM} alt="Foto do perfil" />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="bg-white rounded p-5 card-body text-dark text-start">
            <legend className='fs-3'>Detalhes: </legend>
              <h5 className="fs-4">
                <span className="fs-5 text-muted me-3">Name:</span>
                {user.email}
              </h5>
              <p className="fs-4">
                <span className="fs-5 text-muted me-3">Senha:</span>
                *****
              </p>
            </div>
          </div>
        </div>
      </Coment>
    </Main>
  )
}

const Coment = styled.div`
  width: 100%;
  height: 65vh;

  img {
    width: 70%;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #00adf1;
  }
`

export default Perfil
