import perfil from '../../assets/perfil.png'

const INITIAL_STATE = {
  lastIdInserted: 3,
  postList: [
    {
      id: 3,
      fotoPerfil: `${perfil}`,
      title: 'admin@dev',
      conteudo: `Opa! Tudo bem, {user}? seja bem-vindo(a) a Form.Dev. É um prazer recebê-lo(a) aqui`,
      time: 'Now',
      principalCard: false,
    },
    {
      id: 2,
      fotoPerfil: `${perfil}`,
      title: 'admin@dev',
      conteudo:
        'Esperamos ansiosamente pelos seus comentarios e contribuição para a comunidade, ajudando-o e sendo ajudado',
      time: 'Now',
      principalCard: false,
    },
    {
      id: 1,
      fotoPerfil: `${perfil}`,
      title: 'admin@dev',
      conteudo:
        'lembre-se respeito é primordial em nosso site, trate todos com respeito :)',
      time: 'Now',
      principalCard: true,
    },
  ],
}

function reducer(state = INITIAL_STATE, action) {
  const newId = state.lastIdInserted + 1
  if (action.type === 'ADD_POST') {
    action.post.id = newId
    return {
      lastIdInserted: newId,
      postList: [action.post, ...state.postList],
    }
  }
  if (action.type === 'ADD_REMOVE') {
    const newState = state.postList.filter((object) => object.id !== action.post)
    return {
      lastIdInserted: newId,
      postList: newState 
    }
  }

  return state
}

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    post,
  }
}

export const removePost = (post) => {
  return {
    type: 'ADD_REMOVE',
    post,
  }
}

export default reducer
