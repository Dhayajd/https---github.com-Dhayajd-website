import { useNavigate } from "react-router-dom"
import { useState } from "react"

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlenext = () => {
    
    console.log(formData)
    navigate("/register3")
  }

  const handlecancel = () => {
    navigate("/register")
  }

  return (
    <>
      <div>
        <label>
          Activity Related to Tanfed :
          <select name="activity" value={formData.activity} onChange={handleInputChange}>
            <option value="">---select---</option>
            <option value="Fertiliser">Fertiliser</option>
            <option value="Agri.com">Agri.com</option>
            <option value="Seeds">Seeds</option>
            <option value="Pesticides">Pesticides</option>
            <option value="Implements">Implements</option>
            <option value="Others">Others</option>
          </select>
        </label>
        <div>
          <div>
            you are :
            <input 
              type="radio" 
              value="Headoffice" 
              name="officeType" 
              checked={formData.officeType === "Headoffice"}
              onChange={handleInputChange}
            />
            <label htmlFor="Headoffice">Head office</label>
            <label htmlFor="Branchoffice">
              <input 
                type="radio" 
                name="officeType" 
                value="Branchoffice" 
                checked={formData.officeType === "Branchoffice"}
                onChange={handleInputChange}
              />
              Branch office
            </label>
          </div>
          <div>
            <label>
              select your Institution :
              <select name="institution" value={formData.institution} onChange={handleInputChange}>
                <option value="">---SELECT---</option>
                <option value="IFFCO">IFFCO</option>
                <option value="KRIBHCO">KRIBHCO</option>
                <option value="IPL">IPL</option>
                <option value="MFL">MFL</option>
                <option value="RCR">RCR</option>
                <option value="FACT">FACT</option>
                <option value="SPIC">SPIC</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Enter your GST No :
              <input 
                type="text" 
                name="gstNo" 
                value={formData.gstNo} 
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Institution Head office email :
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div>
          <div>
            Do you have an H & T :
            <label>
              <input 
                type="radio" 
                name="hasHT" 
                value="yes" 
                checked={formData.hasHT === "yes"}
                onChange={handleInputChange}
              />
              yes
            </label>
            <label>
              <input 
                type="radio" 
                name="hasHT" 
                value="no" 
                checked={formData.hasHT === "no"}
                onChange={handleInputChange}
              />
              No
            </label>
          </div>
        </div>
        <button onClick={handlecancel}>Cancel</button>
        <button onClick={handlenext}>Next</button>
      </div>
    </>
  )
}

export default Registration2