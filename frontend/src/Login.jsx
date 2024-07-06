import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login=()=>{

      const[user,setuser]=useState("")
      const[pass,setpass]=useState("")
      const navigate=useNavigate()
      const handleuser =(evt)=>{
         setuser(evt.target.value)
      }
       const handlepass=(evt)=>{
          setpass(evt.target.pass)
       }
       const handlereset=()=>{
         setuser("")
         setpass("")
       }
       const handleregister=()=>{
        navigate("/register")
       }
    return(
        <>
        <div className=" min-h-screen flex justify-center items-center">
         <div className='bg-gray-300 p-8 rounded-lg shadow-md'>
        <h1 className='text-center text-2xl font-bold mb-6' >Login Page</h1>
         <button onClick={handleregister} className='bg-blue-600 px-5 py-2 rounded-xl text-white'>Register</button><br /><br />
        <label>User Name :
        <input type="text" placeholder="Username" value={user} onChange={handleuser} className='w-full px-3 py-2 rounded-lg'/><br /><br /></label>
         <label>      Password  :   <input type="password" placeholder="Password" value={pass} onChange={handlepass} className='w-full px-3 py-2 rounded-lg'/><br /><br />
         <div className='flex justify-between'>
        <button onClick={handlereset} className='bg-slate-500 text-white px-3 py-1 rounded-md'>Reset</button>
        <button className='bg-green-500 px-3 py-1 rounded-md'>Login</button>
        </div>
        </label>
        </div>
        </div>
        </>
    )
}
export default Login