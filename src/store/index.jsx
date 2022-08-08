import { configureStore } from '@reduxjs/toolkit'
import comentariosReduce from './comentarios'

export default configureStore({
  reducer: {
    comentarios: comentariosReduce,
  },
})