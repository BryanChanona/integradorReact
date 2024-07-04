import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AgendarCita from './pages/AgendarCita.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import HomeSecretaria from './pages/HomeSecretaria.jsx'
import Registro from './pages/Registro.jsx'

const router = createBrowserRouter ([
  {
    //App
    path:"/",
    element: <App/>,
    errorElement:<NotFound/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:"/Agendar cita",
    element: <AgendarCita/>
  },
  {
    path:"/Home secretaria",
    element:<HomeSecretaria/>
  },
  {
    path:"/registro",
    element: <Registro/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
