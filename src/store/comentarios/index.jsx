import userM from '../../assets/userM.png'

const INITIAL_STATE = [
    {
      fotoPerfil: `${userM}`,
      title: 'Section 1.10.32',
      conteudo:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      time: '2min update',
      principalCard: true,
    },
    {
      fotoPerfil: `${userM}`,
      title: 'Section 1.10.32',
      conteudo:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      time: '2min update',
      principalCard: true,
    },
    {
      fotoPerfil: `${userM}`,
      title: 'Section 1.10.32',
      conteudo:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      time: '2min update',
      principalCard: true,
    },
  ]


function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_COMENTARIO') {
        return [...state, action.comentario]
    }
    return state;
}

export const addComentario = (comentario) => {
    return {
        type: 'ADD_COMENTARIO',
        comentario
    }
}

export default reducer