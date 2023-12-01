
import ReactDOM from 'react-dom/client'
import "./App.css";
import Create from "./Components/Create"
import Read from "./Components/Read"
import Update from "./Components/Update"
import {BrowserRouter, Routes, Route} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className="main">
  <BrowserRouter>
    <Routes>
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/read" element={ <Read />} />
      <Route exact path="update" element={<Update />} />
    </Routes>
  </BrowserRouter>
</div>
  
)
