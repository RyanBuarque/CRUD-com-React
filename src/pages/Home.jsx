import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faComment,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons'
import userF from '../assets/userF.png'
import Main from '../components/template/Main'

function Home() {
  return (
    <Main>
      <div>
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">
          Sistema para exemplificar a construção de um cadastro desenvolvido em
          React!
        </p>
      </div>

      <hr />

      <Card className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <img src={userF} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body text-dark text-start">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-between">
                <p className="card-text m-0">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <div className="me-5 d-flex col-3 justify-content-around align-items-center">
                  <FontAwesomeIcon icon={faHeart} className="text-warning" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse" id="collapseExample">
          <div class="card card-body bg-secondary m-2">
            <div className="bg-white text-dark">
              <p>AQUIII</p>
            </div>
          </div>
        </div>
        <div class="collapse" id="collapseExample2">
          
          <div class="card card-body text-dark bg-secondary m-2">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 d-flex flex-column justify-content-center">
                  <img src={userF} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-dark text-start">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between">
                      <p className="card-text m-0">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <div className="me-5 d-flex col-3 justify-content-around align-items-center">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-warning"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="card mb-3 ">
              <div className="row g-0">
                <div className="col-md-4 d-flex flex-column justify-content-center">
                  <img src={userF} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-dark text-start">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between">
                      <p className="card-text m-0">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <div className="me-5 d-flex col-3 justify-content-around align-items-center">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-warning"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="card mb-3 ">
              <div className="row g-0">
                <div className="col-md-4 d-flex flex-column justify-content-center">
                  <img src={userF} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-dark text-start">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between">
                      <p className="card-text m-0">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <div className="me-5 d-flex col-3 justify-content-around align-items-center">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-warning"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </Main>
  )
}

const Card = styled.div`
  max-width: 600px;

  img {
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #00adf1;
  }
`

export default Home
