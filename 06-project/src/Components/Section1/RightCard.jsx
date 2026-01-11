import React from 'react'

const RightCard = (props) => {
  return (
    
    <div className='h-full w-80 rounded-3xl overflow-hidden flex flex-col'>
        
        <img className='h-2/3 w-2/3 object-cover ' src={props.img} alt="" />
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatibus laborum, vitae repellat iusto nihil veritatis porro quod esse earum, fuga fugiat molestias odit consequuntur! Repellendus!
        </p>
        <button className='bg-black text-white rounded-full mt-50px'>{props.tag}</button>

    </div>
  )
}

export default RightCard