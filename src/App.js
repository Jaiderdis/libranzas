import {Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

//----estilos----
import './App.css';
//----estilos----

//----componetes----
import RequireAuth from './Componentes/RequireAuth';
import Layout from './Componentes/Layout';
import LayoutLogin from './Componentes/LayoutLogin';
import ProtectedRoute from './Componentes/ProtectedRoute';
//----componetes----
// ----Pages---
import Login from './Pages/Login/Login';
import Editor from './Pages/Editor';
import ValidarInformacion from './Pages/Validar Informacion/ValidarInformacion';
import Unauthorized from './Pages/Unauthorized/Unauthorized';
import Dashboard from './Pages/Dashboard/Dashboard';
import useAuth from './hooks/useAuth';
// ----Pages---



const ROLES = {
  'SuperAdministrador': 'Super Administrador',
  'Editor': 'Editor',
  'Admin': 'Admin'
}


function App() {

  return (
      <Routes >

        <Route  element={<LayoutLogin/>}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route>
           <Route path="/Unauthorized" element={<Unauthorized />} />
        </Route>


        <Route element={<ProtectedRoute/> }>
           <Route element={<Layout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/ArchivosCargados" element={<Editor />} />
            <Route path="/ValidarInformacion" element={<ValidarInformacion />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;



