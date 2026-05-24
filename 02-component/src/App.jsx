import React from 'react'
import Card from './component/Card'
import Nav from './component/Nav';


const App = () => {  

   
    
  return (
      <>  
       <Nav/>
        <Card user="shubham"   age={23}/>
        <Card user="kapil"   age={24}/>
        <Card user="vinay"   age={26}/>


      </>
  )
}

export default App
