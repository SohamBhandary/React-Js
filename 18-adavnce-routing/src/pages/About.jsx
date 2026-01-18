import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
   const navi= useNavigate()

   const btnClicked=()=>{
    navi('/')

  


    }
  return (   
    <div>
      <button onClick={btnClicked} className='bg-green-900 cursor-pointer'>Return to home page</button>
        <h1>About page</h1>
    </div>
  )
}

export default About