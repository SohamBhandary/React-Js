import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Soham' age={87}/>  
      <Card user='Aman' age={80}/>  
      
    </div>
  )
}

export default App