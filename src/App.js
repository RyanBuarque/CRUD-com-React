import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { useEffect, useState } from 'react'
import api from './api'

const App = () => {
  const [filmes, setFilmes] = useState()
  const [pesquisa, setPesquisa] = useState()
  const [name, setName] = useState('')

  useEffect(() => {
    ;(async () => {
      // console.log(pesquisa)
      const filmes = await api.get(pesquisa)
      setFilmes(filmes.data)
    })()
  }, [pesquisa])

  function clearPesquisa(event) {
    event.preventDefault()
    const clear = ''
    setName(clear)
    setPesquisa(clear)
  }

  function pesquisaTV(e) {
    e.preventDefault()
    const pesquisa = name.replace(/\s+/g, '+')
    setPesquisa(pesquisa)
  }

  return (
    <div>
      <div className="border w-50 mx-auto p-5 my-5">
        <h1>Pesquisa TV</h1>
        <form onSubmit={pesquisaTV} className="d-flex flex-column">
          <div className="py-3">
            <input
              className="form-control"
              type="text"
              id="pesquisaTV"
              placeholder="Nome que deseja pesquisar"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="align-self-end d-flex">
            <input
              type="submit"
              className="btn btn-primary order-2"
              placeholder="Enviar"
            />
            <button
              className="btn btn-secondary me-2"
              onClick={clearPesquisa}
            >Limpar</button>
          </div>
        </form>
      </div>
      {filmes &&
        filmes.map((filme) => (
          <div key={filme.show.id} className="w-50 mx-auto">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={filme.show.image.original}
                    className="img-fluid rounded-start"
                    alt="Imagem da TV"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{filme.show.name}</h5>
                    <p className="card-text">{filme.show.url}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {filme.show.language}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default App
