
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Layout from './app/Layout'

function App() {

  return (
    <Router>
      <div className="flex">
      <Layout/>
              <div className="flex-1 p-5">
         
        </div>
      </div>
    </Router>
   
  )
}

export default App
