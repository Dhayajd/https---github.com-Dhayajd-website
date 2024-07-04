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
        <div>
        <h1>Login Page</h1>
         <button onClick={handleregister}>Register</button><br /><br />
        <label>User Name :
        <input type="text" placeholder="Username" value={user} onChange={handleuser} /><br /><br /></label>
         <label>      Password  :   <input type="password" placeholder="Password" value={pass} onChange={handlepass}/><br /><br />
        <button onClick={handlereset}>Reset</button><button>Login</button>
        </label>
        </div>
        </>
    )
}
export default Login