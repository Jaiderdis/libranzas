import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

//----estilos----
import './App.css';
//----estilos----

//----componetes----
import RequireAuth from './Componentes/RequireAuth';
import Layout from './Componentes/Layout/Layout';
import LayoutLogin from './Componentes/Layout/LayoutLogin';
import ProtectedRoute from './Componentes/ProtectedRoute';
//----componetes----
// ----Pages---
import Login from './Pages/Login/Login';
import CargarArchivos from './Pages/CargarArchivos/CargarArchivos';
import ValidarInformacion from './Pages/Validar Informacion/ValidarInformacion';
import Unauthorized from './Pages/Unauthorized/Unauthorized';
import Dashboard from './Pages/Dashboard/Dashboard';
import useAuth from './hooks/useAuth';
// ----Pages---



const ROLES = {
  'Super': '1',
  'Admin': '2',
  'provee': '3'
}


function App() {

  return (
    <Routes >

      <Route element={<LayoutLogin />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route>
        <Route path="/Unauthorized" element={<Unauthorized />} />
      </Route>


      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />} >

          <Route path="/" element={<Dashboard />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Super,ROLES.Admin]}/>}>
            <Route path="/ValidarInformacion" element={<ValidarInformacion />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.provee,ROLES.Super]}/>}>
            <Route path="/CargarArchivos" element={<CargarArchivos />} />
          </Route>


        </Route>
      </Route>
    </Routes>
  );
}

export default App;



