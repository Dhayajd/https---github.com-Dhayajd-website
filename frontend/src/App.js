import {BrowserRouter,Routes,Route}from "react-router-dom"
import Login from './Login';
import Registration from "./Registration"
import Registration2 from "./Registration2";
import Registration3 from "./Registration3";
import{useState} from"react"

function App() {
  const [inputArray, setInputArray] = useState([]);
  const handleinputsubmit=(input)=>{
       setInputArray([...inputArray,input])
       console.log (inputArray)
  }
  return (
     <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Registration/>}></Route>
      <Route path="/register2" element={<Registration2 onSubmit={handleinputsubmit}/>}></Route>
      <Route path="/register3" element={<Registration3/>}></Route>
     </Routes>
     </BrowserRouter>
     
     </>
  );
}

export default App;
