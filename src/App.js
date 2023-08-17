import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Navbar from './Componentes/Navbar';
import Layout from './Componentes/Layout';
import Dashboard from './Pages/Dashboard';
import RequireAuth from './Componentes/RequireAuth';
import Unauthorized from './Pages/Unauthorized';
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

        {/* 
      <Route path="Login" element={<Login />} />
      <Route path="/" element={<Dashboard/>} /> */}

        <Route element >
          <Route>
            <Route path="Unauthorized" element={<Unauthorized />} />
            <Route path="Login" element={<Login />} />
          </Route>

          <Route >
            <Route element={<RequireAuth allowedRoles={[ROLES.SuperAdministrador]} />}>
              <Route path="/" element={<Dashboard />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
              <Route path="editor" element={<Editor />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.SuperAdministrador]} />}>
              <Route path="ValidarInformacion" element={<ValidarInformacion />} />
            </Route>
            {/* catch all */}
            {/* <Route path="*" element={<Missing />} /> */}
          </Route>
        </Route>
      </Routes>
    </>


  );
}

export default App;



