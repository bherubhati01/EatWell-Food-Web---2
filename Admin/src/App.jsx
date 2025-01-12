import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import {Route, Routes} from 'react-router-dom'
import Add from "./Pages/Add/Add"
import List from "./Pages/List/List"
import Orders from "./Pages/Orders/Orders"


const App = () => {
  const url = "https://eatwell-backend.onrender.com"
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
        </Routes>

      </div>
    </div>
  )
}

export default App