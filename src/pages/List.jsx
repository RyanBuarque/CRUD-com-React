import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../components/Card'

function List() {
  const comentarios = useSelector((state) => state.comentarios)

  return <div>{comentarios.map(Card)}</div>
}

export default List
