import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className="h-full w-80 rounded-3xl overflow-hidden flex flex-row gap-4">
      {props.users.map(function(e){
        return <RightCard  img={e.img} tag={e.tag} />
      })}
      
    </div>
  )
}

export default RightContent
