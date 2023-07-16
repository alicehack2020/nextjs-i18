import React from 'react'
import {getDictionary} from "../../../dictionary"
const page =async ({params}:{params:any}) => {
  const lang = await getDictionary(params.lang);

  return (
    <div className='gap-2 grid place-content-center h-screen shadow-md'>
      <div className='gap-2 flex flex-col'>
      <label>{lang.form.name}</label>
      <input type="text" className='border border-gray-300 rounded-md focus:outline-none'/>
    </div>
    <div className='gap-2 flex flex-col'>

      <label>{lang.form.email}</label>
      <input type="email" className='border border-gray-300 rounded-md focus:outline-none'/>

    </div>
    <div className='gap-2 flex flex-col'>

      <label>{lang.form.city}</label>
      <input type="text" className='border border-gray-300 rounded-md focus:outline-none'/>

    </div>
    </div>
   
   
  )
}

export default page