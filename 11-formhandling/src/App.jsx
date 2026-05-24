import React, { useRef } from 'react'

const App = () => {
  
  
  const formRef = useRef() ; 

     const handleSubmit  = (e)=> {
      e.preventDefault(); 
       console.log("form is working")
  
      


     }

  return (
    <div>

      <h1>Form Handling</h1>

      <form ref={formRef} onSubmit={handleSubmit} >

        <input type="text" placeholder="enter name" />
        <input type="text" placeholder="enter email" />
        <input type="text" placeholder="enter Mobile"/>
        <input type="text"  placeholder="enter address" />

      <button>Sumbit</button> 

      </form>
      
    </div>
  )
}

export default App
