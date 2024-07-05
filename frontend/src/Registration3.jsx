import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Registration3 = () => {
  const navigate = useNavigate()

  
  const [formData, setFormData] = useState({
    institutionName: "",
    address: "",
    emailuser: "",
    userName: "",
    designation:"",
    mobileNo: "",
    aadharNo: ""
  })

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlesubmit = async (e) => {

    e.preventDefault()
    try{
      const response= await axios('',formData)
      console.log("response is here",response)
      navigate('/login')
    }catch(error){
      console.log("error is here",error)
    }
   
    
  }

  const handlecancel = () => {
    navigate("/register2")
  }

  return (
    <>
      <div>
        <label>
          Name of the Institution :
          <input 
            type="text" 
            name="institutionName" 
            value={formData.institutionName} 
            onChange={handleInputChange}
          />
        </label><br /><br />
        <label htmlFor="address">
          Address :
          <textarea 
            name="address" 
            value={formData.address} 
            onChange={handleInputChange}
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          Email id :
          <input 
            type="email" 
            name="emailuser" 
            value={formData.emailuser} 
            onChange={handleInputChange}
          />
        </label><br /> <br />
        <label>
          Name of the User:
          <input 
            type="text" 
            name="userName" 
            value={formData.userName} 
            onChange={handleInputChange}
          />
        </label><br /><br />
        <label>
          Designation:
          <input 
            type="text" 
            name="designation" 
            value={formData.designation} 
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Mobile No :
          <input 
            type="number" 
            name="mobileNo" 
            value={formData.mobileNo} 
            onChange={handleInputChange}
          />
        </label><br /> <br />
        <label>
          Aadhar No:
          <input 
            type="number" 
            name="aadharNo" 
            value={formData.aadharNo} 
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button onClick={handlecancel}>Cancel</button>
      <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default Registration3