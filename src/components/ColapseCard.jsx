import React from 'react'
import Teste from './Teste'
import userM from '../assets/userM.png'

function ColapseCard() {
    const propsComent = {
        fotoPerfil: `${userM}`,
        title: "Section 1.10.32",
        conteudo: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        time: "2min update",
        principalCard: false
      }
  return (
    <div>
          <div class="collapse" id="collapseExample">
          <div class="card card-body bg-secondary m-2">
            <div className="bg-white text-dark">
              <p>AQUIII</p>
            </div>
          </div>
        </div>
        <div class="collapse " id="collapseExample2">
            <div className="card card-body text-dark bg-secondary m-2">

            <Teste {...propsComent}/>
            <Teste {...propsComent}/>
            <Teste {...propsComent}/>
            </div>
        </div>
    </div>
  )
}

export default ColapseCard