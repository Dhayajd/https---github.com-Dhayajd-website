import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Registration2 = () => {
  const navigate = useNavigate()
  
  
  const [formData, setFormData] = useState({
    activity: "",
    officeType: "",
    institution: "",
    gstNo: "",
    email: "",
    hasHT: ""
  })

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlenext =async () => {
    try{
      const response= await axios.post('',formData)
      console.log("response is here",response)
      navigate("/register3")
    }catch (error){
      console.log('Error here',error)
    }
   
  }

  const handlecancel = () => {
    navigate("/register")
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-300 p-8 rounded-xl">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="pr-4 py-2">Activity Related to Tanfed:</td>
              <td>
                <select name="activity" value={formData.activity} onChange={handleInputChange} className="w-full px-2 py-1 rounded-md">
                  <option value="">---select---</option>
                  <option value="Fertiliser">Fertiliser</option>
                  <option value="Agri.com">Agri.com</option>
                  <option value="Seeds">Seeds</option>
                  <option value="Pesticides">Pesticides</option>
                  <option value="Implements">Implements</option>
                  <option value="Others">Others</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">You are:</td>
              <td>
                <label className="mr-4">
                  <input 
                    type="radio" 
                    value="Head" 
                    name="officeType" 
                    checked={formData.officeType === "Head"}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  Head office
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="officeType" 
                    value="Branch" 
                    checked={formData.officeType === "Branch"}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  Branch office
                </label>
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">Select your Institution:</td>
              <td>
                <select name="institution" value={formData.institution} onChange={handleInputChange} className="w-full px-2 py-1 rounded-md">
                  <option value="">---SELECT---</option>
                  <option value="IFFCO">IFFCO</option>
                  <option value="KRIBHCO">KRIBHCO</option>
                  <option value="IPL">IPL</option>
                  <option value="MFL">MFL</option>
                  <option value="RCR">RCR</option>
                  <option value="FACT">FACT</option>
                  <option value="SPIC">SPIC</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">Enter your GST No:</td>
              <td>
                <input 
                  type="text" 
                  name="gstNo" 
                  value={formData.gstNo} 
                  placeholder="Enter GST No..."
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 rounded-md"
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">Institution Head office email:</td>
              <td>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  placeholder="Enter E-mail Id..."
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 rounded-md"
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">Do you have an H & T:</td>
              <td>
                <label className="mr-4">
                  <input 
                    type="radio" 
                    name="hasHT" 
                    value="yes" 
                    checked={formData.hasHT === "yes"}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  Yes
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="hasHT" 
                    value="no" 
                    checked={formData.hasHT === "no"}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  No
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between mt-6">
          <button onClick={handlecancel} className="bg-slate-500 text-white px-4 py-2 rounded-md">Cancel</button>
          <button onClick={handlenext} className="bg-blue-500 text-white px-6 py-2 rounded-md">Next</button>
        </div>
      </div>
    </div>
  )
}

export default Registration2