import React from 'react'

const Card = (props) => {

    console.log(props.user,props.age); 
    
  return (
    <div>
        <div className='card'>
                <h1>{props.user}</h1>
                <h1>{props.age}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <button>veiw profile</button>
        
              </div>   
            
    </div>
  )
}

export default Card