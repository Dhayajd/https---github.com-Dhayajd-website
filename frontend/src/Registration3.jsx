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
    designation: "",
    mobileNo: "",
    aadharNo: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('', formData)
      console.log("response is here", response)
      navigate('/login')
    } catch (error) {
      console.log("error is here", error)
    }
  }

  const handlecancel = () => {
    navigate("/register2")
  }

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="bg-gray-300 p-8 rounded-md">
        <form onSubmit={handlesubmit}>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pr-4 py-2">Name of the Institution:</td>
                <td>
                  <input 
                    type="text" 
                    name="institutionName" 
                    value={formData.institutionName} 
                    className="w-full rounded-md p-1"
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 py-2">Address:</td>
                <td>
                  <textarea 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInputChange}
                    className="w-full rounded-md p-1"
                    rows="3"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td className="pr-4 py-2">Email id:</td>
                <td>
                  <input 
                    type="email" 
                    name="emailuser" 
                    value={formData.emailuser} 
                    placeholder="Enter Email id..."
                    onChange={handleInputChange}
                    className="w-full rounded-md p-1"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 py-2">Name of the User:</td>
                <td>
                  <input 
                    type="text" 
                    name="userName" 
                    placeholder="Username"
                    value={formData.userName} 
                    onChange={handleInputChange}
                    className="w-full rounded-md p-1"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 py-2">Designation:</td>
                <td>
                  <input 
                    type="text" 
                    name="designation" 
                    placeholder="Designation"
                    value={formData.designation} 
                    onChange={handleInputChange}
                    className="w-full rounded-md p-1"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 py-2">Mobile No:</td>
                <td>
                  <input 
                    type="number" 
                    name="mobileNo" 
                    value={formData.mobileNo}
                    placeholder="Mobile Number" 
                    onChange={handleInputChange}
                    className="w-full rounded-md p-1"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 py-2">Aadhar No:</td>
                <td>
                  <input 
                    type="number" 
                    name="aadharNo" 
                    placeholder="Aadhar Number"
                    value={formData.aadharNo} 
                    onChange={handleInputChange}
                    className="w-full rounded-md p-1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex justify-end space-x-4">
            <button type="button" onClick={handlecancel} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration3