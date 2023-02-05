import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Rodapé/footer'

function App() {

  return (
    <div className="App">
      
      <NavBar />
      <Outlet />
     <Footer/>
    </div>
  )
}

export default App