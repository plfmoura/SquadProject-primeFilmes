import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './routes/Filmes/Filmes'
import Loja from './routes/Loja/Loja'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import Home from './routes/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { 
        path: '/filmes',
        element: <Filmes />,
      },
      {
        path: '/loja',
        element: <Loja />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
