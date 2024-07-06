import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Registration = () => {
  const [selectedOffice, setSelectedOffice] = useState('')
  const [selecteddistrict, setSelecteddistrict] = useState('')
  const [selectedcovered, setSelectedcovered] = useState('')
  const [districtName, setDistrictName] = useState('')
  const [districtList, setDistrictList] = useState([])

  const navigate = useNavigate()

  const handleOfficeChange = (event) => {
    setSelectedOffice(event.target.value)
  }

  const handledistrictChange = (event) => {
    setSelecteddistrict(event.target.value)
  }

  const handlecovered = (event) => {
    setSelectedcovered(event.target.value)
  }

  const handleDistrictNameChange = (event) => {
    setDistrictName(event.target.value)
  }

  const handleAddDistrict = () => {
    if (districtName.trim() !== '') {
      setDistrictList([...districtList, districtName.trim()])
      setDistrictName('')
    }
  }

  const handleDeleteDistrict = (index) => {
    const updatedList = districtList.filter((_, i) => i !== index)
    setDistrictList(updatedList)
  }

  const handlenext = async () => {
    console.log({ selectedOffice, selecteddistrict, selectedcovered, districtList })
    const formData = {
      selectedOffice, selecteddistrict, selectedcovered, districtList
    }
    try {
      const response = await axios.post('', formData)
      console.log("executed", response)
      navigate("/register2")
    } catch (error) {
      console.log('error is here', error)
    }
  }

  const handlecancel = () => {
    navigate("/")
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='bg-gray-300 p-6 rounded-lg shadow-md'>
        <h1 className='text-center font-bold text-2xl mb-10'>Registration</h1>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="pr-4 py-2">Tanfed Regional office:</td>
              <td>
                <select 
                  value={selectedOffice} 
                  onChange={handleOfficeChange} 
                  className='w-full px-2 py-1 rounded-md'
                >
                  <option value="">---Select---</option>
                  <option value="kanchipuram">kanchipuram</option>
                  <option value="chennai">chennai</option>
                  <option value="madurai">madurai</option>
                  <option value="coimbatore">coimbatore</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">District:</td>
              <td>
                <select 
                  value={selecteddistrict} 
                  onChange={handledistrictChange} 
                  className='w-full px-2 py-1 rounded-md'
                >
                  <option value="">---Select---</option>
                  <option value="kanchipuram">kanchipuram</option>
                  <option value="chennai">chennai</option>
                  <option value="madurai">madurai</option>
                  <option value="coimbatore">coimbatore</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
  
        <h5 className="mt-8 text-center text-lg font-medium mb-8">Area Operation</h5>
        
        <table className="w-full">
          <tbody>
            <tr>
              <td className="pr-4 py-2">No of District covered:</td>
              <td>
                <input 
                  type="number" 
                  onChange={handlecovered} 
                  value={selectedcovered} 
                  className='w-full px-2 py-1 rounded-md'
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 py-2">Name of the District:</td>
              <td className="flex">
                <input 
                  type="text" 
                  value={districtName}
                  onChange={handleDistrictNameChange}
                  className='flex-grow px-2 py-1 rounded-md mr-2'
                />
                <button 
                  onClick={handleAddDistrict}
                  className='bg-green-400 text-white px-3 py-1 rounded-md'
                >
                  ADD
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {districtList.length > 0 && (
          <div className="mt-4">
            <h6 className="font-medium mb-2">Added Districts:</h6>
            <ul className="list-none pl-0">
              {districtList.map((district, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{district}</span>
                  <button 
                    onClick={() => handleDeleteDistrict(index)}
                    className='bg-red-500 text-white px-2 py-1 rounded-md text-sm'
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
  
        <div className="flex justify-between mt-10">
          <button onClick={handlecancel} className='bg-slate-500 text-white px-4 py-2 rounded-md'>Cancel</button>
          <button onClick={handlenext} className='bg-blue-600 px-4 py-2 text-white rounded-md'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Registration