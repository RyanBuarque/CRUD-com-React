import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/auth'
import Rotas from './Routes'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AuthProvider>
          <Rotas />
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
