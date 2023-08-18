import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Navbar from './Componentes/Navbar';
import Layout from './Componentes/Layout';
import Dashboard from './Pages/Dashboard';
import RequireAuth from './Componentes/RequireAuth';
import Unauthorized from './Pages/Unauthorized';
import ProtectedRoute from './Componentes/ProtectedRoute';
import Editor from './Pages/Editor';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PersistLogin from './Componentes/PersistLogin';
import ValidarInformacion from './Pages/ValidarInformacion';




const ROLES = {
  'SuperAdministrador': 'Super Administrador',
  'Editor': 'Editor',
  'Admin': 'Admin'
}
function App() {

  return (
    <>
      <Routes >

        {/* <Route element={validateSesion}> */}
        {/* <Route path="Login" element={<Login />} /> */}




          {/* <Route path="/" element={
             <ProtectedRoute>
              <Dashboard></Dashboard>
             </ProtectedRoute> */}
          
          {/* </Route> */}
          

        
           <Route>
            <Route path="Unauthorized" element={<Unauthorized />} />
            <Route path="Login" element={<Login />} />
          </Route>


             <Route element={<Layout></Layout>}>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>

            <Route element={<ProtectedRoute  />}>
              <Route path="editor" element={<Editor />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="ValidarInformacion" element={<ValidarInformacion />} />
            </Route>

            </Route>
            {/* catch all */}
            {/* <Route path="*" element={<Missing />} /> */}

        
      </Routes>
    </>


  );
}

export default App;



