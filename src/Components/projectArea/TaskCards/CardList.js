import React from 'react'
import SingleTaskCard from './SingleTaskCard'

function CardList({taskCard, handleDel}) {
  return (
    taskCard.map(par =>{
      return <SingleTaskCard key={par.id} singleCard={par} handleDel={handleDel} />
      
    }) 
  )
}

export default CardList