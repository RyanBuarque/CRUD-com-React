import React from 'react'
import { useSelector } from 'react-redux'

import Card from './Card'

const renderCard = (props) => {
  return(
    <div key={`card-list-${props.id}`}>
      <Card {...props} />
    </div>
    )
}

function List() {
  const posts = useSelector((state) => state.postsStruct.postList)

  return <>{posts.map(item => renderCard(item))}</>
}

export default List
