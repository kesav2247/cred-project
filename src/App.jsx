
import "./App.css";
import Create from "./Components/Create"
import Read from "./Components/Read"
import Update from "./Components/Update"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useNavigate} from "react"
import { Button } from 'semantic-ui-react'


function App() {


  const createpage = () => {
    navigate("/create")
  }

  const navigate = useNavigate()
  return (
    <div className="main">
      <h1>CRUD OPERATION</h1>
     <Button onClick={createpage}>Please Click To Go <h3>CRUD</h3> Operation Page</Button>
      

      
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={ <Read />} />
          <Route exact path="update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App