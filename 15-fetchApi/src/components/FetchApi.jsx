import React, { useState } from 'react'

const FetchApi = () => {


  const [data , setData] = useState([])  ;

   const CallApi = async()=>{
           
     
      try{
           let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") ; 
            console.log(response) ; 

            let jsonData = await response.json(); 

              setData(jsonData) ; 
      }
      catch(error){
          console.log(error) ; 
         window.alert("Error while fetching Data")     ;  
      }

   }

  return (
    <>
      <div className='w-full h-auto bg-gray-900 '>
        
        <h1 className="text-2xl font-bold text-blue-400" >Get data throgh Fetch Api </h1>

        <button className=' px-4 py-1 bg-emerald-600 active:scale-95 duration-150 active:bg-emerald-500 cursor-pointer text-xl rounded'
        onClick={CallApi}
        >Get Data</button>
        <p>Your data will appear HERE</p>

        <div className='flex flex-wrap gap-4 justify-around mt-4 h-auto w-full'>
          {data.map((item) => (
            <div key={item.id} className=' p-4 m-2 bg-gray-800 rounded w-[300px]'>
              <h2 className='text-xl font-bold'>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

      </div>


    </>
  )
}

export default FetchApi