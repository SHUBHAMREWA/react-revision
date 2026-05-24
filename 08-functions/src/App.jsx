import React, { useState } from 'react'

const App = () => {

    const [user , setUser] = useState({name : "kapil" , age:24}) 

    
    const ChangeAge = ()=>{

        console.log("button is clicked") , 
        setUser((prevState)=>{
             return {...prevState, age : prevState.age -1}
        })
         
    }

  return (

    <div> 

    <h1>this is user</h1>  

    <p>{user.name} is {user.age} years old.</p>

    <button onClick={ChangeAge}> Change user Age </button>
       
    </div>
  )
}

export default App
