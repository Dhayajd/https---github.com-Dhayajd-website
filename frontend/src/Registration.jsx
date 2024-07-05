import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const Registration=()=>{
    const [selectedOffice, setSelectedOffice] = useState('');
    const [selecteddistrict, setSelecteddistrict] = useState('');
    const [selectedcovered, setSelectedcovered] = useState('');

    const handleOfficeChange = (event) => {
      setSelectedOffice(event.target.value);
    };
    const handledistrictChange = (event) => {
        setSelecteddistrict(event.target.value);
      };
      const handlecovered = (event) => {
        setSelectedcovered(event.target.value);
      };

    const navigate=useNavigate()
    const handlenext=async()=>{
      console.log({selectedOffice,selecteddistrict,selectedcovered})
      const formData={
        selectedOffice,selecteddistrict,selectedcovered
      }
      const response=await axios('',formData)
      console.log("executed",response)
         navigate("/register2")
    }
    const handlecancel=()=>{
        navigate("/")
      }
    return(<>
    <div>
      <h1>Registration</h1>
      <div>
        <label>
          Tanfed Regional office :
          <select value={selectedOffice} onChange={handleOfficeChange}>
            <option value="">---Select---</option>
            <option value="kanchipuram">kanchipuram</option>
            <option value="chennai">chennai</option>
            <option value="madurai">madurai</option>
            <option value="coimbatore">coimbatore</option>
          </select>
        </label>
      </div>
      <p>Selected office: {selectedOffice}</p>
    </div>
<br />
<div>
      <div>
        <label>
          District :
          <select value={selecteddistrict} onChange={handledistrictChange}>
            <option value="">---Select---</option>
            <option value="kanchipuram">kanchipuram</option>
            <option value="chennai">chennai</option>
            <option value="madurai">madurai</option>
            <option value="coimbatore">coimbatore</option>
          </select>
        </label>
      </div>
      <p>Selected office: {selecteddistrict}</p>
    </div>



       <h5>Area Operation</h5>
       <div>
       <label>
        No of District covered : <input type="number" onChange={handlecovered} value={selectedcovered}/>
       </label>
       <label>name of the District <input type="text" /><button>ADD</button></label><br />
       <button onClick={handlecancel}>cancel</button><button>Finished</button><button onClick={handlenext}>Next</button>
       </div>

    
    </>)
}
export default Registration