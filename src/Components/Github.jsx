import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    const [url, setUrl] = useState("go to github for more information")
   const ramaayenge = ()=>{
setUrl("thanks! for clicking it")
   }
  return (
    <div className='flex justify-center flex-col gap-3 items-center w-full h-1/2'>
<a onClick={()=>{ramaayenge()}} className=' text-black text-3xl font-serif mb-5 capitalize bg-teal-400'target='_blank' href={data.html_url}> Url : {url}</a>
<img src={data.avatar_url} alt="githubpicture" width={50} height={100} />

<h1 className='text-black text-2xl bg-red-300'>github id: {data.id}</h1>
    </div>
  )
}

export default Github

 export const Githubinfo  = async () => {
let data = await fetch("http://api.github.com/users/developergovindsrivastav")
return data.json()


}