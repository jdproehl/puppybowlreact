import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SinglePlayer from './components/SinglePlayer'
import MainContainer from './MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <div id="navbar">
       <NavBar />
       </div> 
      <div id="main-section">
       <MainContainer />
      </div>
      </div>
      <div>
        <SinglePlayer />
      </div>
    </>
  )
}

export default App

