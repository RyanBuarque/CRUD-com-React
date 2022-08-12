import React from 'react'
import { useSelector } from 'react-redux'

import Card from './Card'

function List() {
  const posts = useSelector((state) => state.postsStruct.postList)

  return <>{posts.map(Card)}</>
}

export default List
