import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

function List() {

    const comentarios = useSelector((state) => state.comentarios )

  return (
    <div>
      {comentarios.map(Card)}
    </div>
  )
}

export default List
