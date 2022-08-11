import perfil from '../../assets/perfil.png'

const INITIAL_STATE = [
  {
    fotoPerfil: `${perfil}`,
    title: 'admin@dev',
    conteudo: `Opa! Tudo bem, {user}? seja bem-vindo(a) a Form.Dev. É um prazer recebê-lo(a) aqui`,
    time: 'Now',
    principalCard: false,
  },
  {
    fotoPerfil: `${perfil}`,
    title: 'admin@dev',
    conteudo:
      'Esperamos ansiosamente pelos seus comentarios e contribuição para a comunidade, ajudando-o e sendo ajudado',
    time: 'Now',
    principalCard: false,
  },
  {
    fotoPerfil: `${perfil}`,
    title: 'admin@dev',
    conteudo:
      'lembre-se respeito é primordial em nosso site, trate todos com respeito :)',
    time: 'Now',
    id:'',
    principalCard: true,
  },
]

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_COMENTARIO') {
    
    return [action.comentario, ...state]
  }
  return state
}

export const addComentario = (comentario) => {
  return {
    type: 'ADD_COMENTARIO',
    comentario,
  }
}

export default reducer
