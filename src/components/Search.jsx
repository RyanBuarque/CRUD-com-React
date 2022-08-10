import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
  return (
    <Pesquisa className="flex-fill align-self-center ms-5 me-2">
      <div className="bg-white d-flex w-50 rounded-pill">
        <form
          onSubmit={''}
          className="d-flex align-items-center mx-3 flex-fill"
        >
          <label htmlFor="pesquisa">
            <FontAwesomeIcon icon={faSearch} className="fs-5 text-dark p-2" />
          </label>
          <input
            className="form-control border-0"
            type="text"
            id="pesquisa"
            placeholder="Nome que deseja pesquisar"
            // value={''}
            // onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
    </Pesquisa>
  )
}

const Pesquisa = styled.div`
  > div {
    box-shadow: 0px 0px 1px 4px #00adf1;
  }
  input {
    box-shadow: none !important;
  }
`

export default Search
