import React, { useEffect } from 'react'

const App = () => {  


    useEffect(()=>{  

  // local strorage is a web API that allows us to store data in the browser's local storage. It provides a way to store key-value pairs in the browser, and the data persists even after the browser is closed.

    //  it store data in only String Formate 

      localStorage.setItem("name" , "shubham" ) 

      // Get item from local storage , 
      const name = localStorage.getItem("name")

      console.log("this is name from local storage"  , name)  

      // Store an Object in Local storage 
        const user = { 
             name : "kapil " , 
             age : 30 , 
             address : "Hardi baikunthpur"
        }
         localStorage.setItem("userData" , JSON.stringify(user)) ; 

        //  Get object data from local storage 
        const userData = localStorage.getItem("userData") ; 
        console.log("this is user Object data from local storage" , JSON.parse(userData)) ;

         // Remove item from local storage 
          //  localStorage.removeItem("name") ; 

         // Clear all data from local storage 
        //  localStorage.clear() ; 
    })

  return (
    <div>Testing local storage and there Methods </div>
  )
}

export default App