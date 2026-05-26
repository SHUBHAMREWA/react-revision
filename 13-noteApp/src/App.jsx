import React, { useState } from 'react'

const App = () => {  

    const [noteData , setNoteData]  = useState({
        title : "", 
        description : "" 
    })

    const [notes , setNotes] = useState([])  ;


    const HandleChange =(e) => { 
       
      setNoteData(()=>{
         return {
           ...noteData ,  
            [e.target.name] : e.target.value
           }
         }
      )
          
    }

    const handleSubmit = (e)=>{  
      e.preventDefault() ;  

      let allNotes = [...notes] ; 

       allNotes.push(noteData) ; 

       setNotes(allNotes) ;

       setNoteData({
         title : "" , 
         description : "" 
       })
        
    }

    const handleDeleteNote = (index)=>{
        let allNotes = [...notes]  ; 

        allNotes.splice(index, 1) ; 
        setNotes(allNotes) ;  

          }


  return (
     
   <>  
    <h1> This is note app </h1>  
    <div>
      <h2>Create Your Note</h2> 
      <form 
      onSubmit= {(e)=> handleSubmit(e)}
       className='m-3 text-2xl flex flex-col gap-3'> 
          <input   
          className='w-1/2 *:outline-none border-2 border-b-gray-500'
          name= "title"
          value = {noteData.title}
          onChange= {(e)=> HandleChange(e)}
           type="text" placeholder="title"/> 
          <br />
          <textarea 
           className='w-1/2 *:outline-none border-2 border-gray-500'
           value = {noteData.description} 
           name='description'
           onChange = {(e)=> HandleChange(e)}
           type="text" placeholder="description"/> 
          <br />
          <button
           className='w-1/2 outline-none bg-green-400 text-2xl'
          >Create NOTE</button>
      </form>
      
        
    </div>


    <div>
      <h3>Recent Notes</h3>
      <div>
       {notes.map((note, index)=>{
         return (
           <div key={index} className='w-1/2 border-2 border-gray-500 m-3 p-3 flex flex-col gap-3'>
             <h4 className='text-xl font-bold'>{note.title}</h4>
             <p>{note.description}</p>
             <button 
             onClick={()=> handleDeleteNote(index)}
             className='w-1/4 outline-none bg-red-400 text-white'>Delete</button>
           </div>
         )
          }
        )}
      </div>
    </div>
   </>

  )
}

export default App