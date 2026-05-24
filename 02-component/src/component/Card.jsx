import React from 'react'

const Card = (props) => {
      

  return (
       <div className='card'>
           <h1>{props.user}</h1>
           <p>i'm am {props.age}</p>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur soluta hic provident vel blanditiis sint nisi corrupti magnam asperiores eligendi omnis velit ducimus, modi laborum quia vero ex veritatis?</p>
            </div> 
  )
}

export default Card
