import React, { useState } from 'react';
import axios from 'axios';


const AxiosApi =  () => {

  const [listData, setListData] = useState([]);

  const getAllData = async() => {

    const response = await axios.get("http://jsonplaceholder.typicode.com/comments?_limit=10");
    console.log(response);
    setListData(response.data);

  }


  return (

    <>
      <div>
        <h2 className="text-2xl font-bold text-blue-400" >this Data from Axios </h2>
        <button  className=' px-4 py-1 bg-emerald-600 active:scale-95 duration-150 active:bg-emerald-500 cursor-pointer text-xl rounded'
        onClick={getAllData}>Get Data</button>

          <p>your Data will be Display here</p>

        <div className='flex flex-wrap gap-4 justify-around mt-4 h-auto w-full'>
          {
       listData.map((item , index)=>{
         return <div key={index} className=' p-4 m-2 bg-gray-800 rounded w-[300px]' > 
            <h3>{item.name}</h3> 
            <p>{item.email}</p>
            <p>{item.body}</p>

         </div> 
       })
    }
        </div>
      </div>
    </>)
}

export default AxiosApi