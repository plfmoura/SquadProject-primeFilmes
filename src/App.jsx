import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <div className="navBarContainer">
        <p>Isso é um menu</p>
      </div>
      <h1>O melhor site de cinema de todos os tempos, alugue e assista em casa.</h1>
      <Outlet />
      <p>rodapé</p>
    </div>
  )
}

export default App
