import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <p>rodapé</p>
    </div>
  )
}

export default App