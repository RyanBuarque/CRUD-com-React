import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './Routes'
import Footer from './components/template/Footer'
import Header from './components/template/Header'
import Nav from './components/template/Nav'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Nav />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
