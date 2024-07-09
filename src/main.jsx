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
import EditarCitas from './pages/EditarCitas.jsx'
import Home from './pages/Home.jsx'
import VerCitas from './pages/VerCitas.jsx'
import AgregarMedicamento from './pages/AgregarMedicamento.jsx'
import VerMedicamentos from './pages/VerMedicamentos.jsx'
import EditarMedicamentos from './pages/EditarMedicamentos.jsx'

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
  }, {
    path:"/editarCita",
    element: <EditarCitas/>

  },{
    path:"/Home",
    element: <Home/>
  },{
    path:"/verCitas",
    element: <VerCitas/>
  },{
    path:"/AgregarMedicamento",
    element: <AgregarMedicamento/>
  },{
    path:"/verMedicamentos",
    element: <VerMedicamentos/>
  },{
    path:"/editarMedicamentos",
    element: <EditarMedicamentos/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
