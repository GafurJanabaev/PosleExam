import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Kunlik from "./screens/Kunlik/Kunlik";
import Ertengi from "./screens/Ertengi/Ertengi";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/" element={<Layout/>}>
          <Route path="/kunlik" element={<Kunlik/>}/>
          <Route path="/erten" element={<Ertengi/>}/>
        </Route>
      </Routes>
    </div>
)}

export default App;
