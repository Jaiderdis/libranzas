import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
//----styles----
import './App.css';
//----Context----
import { CriteriosProvider } from './Context/CriteriosContext';
//----Componets----
import RequireAuth from './Componentes/RequireAuth';
import Layout from './Componentes/Layout/Layout';
import LayoutLogin from './Componentes/Layout/LayoutLogin';
import ProtectedRoute from './Componentes/ProtectedRoute';
//----Pages----
import Login from './Pages/Login/Login';
import CargarArchivos from './Pages/CargarArchivos/CargarArchivos';
import ValidarInformacion from './Pages/Validar Informacion/ValidarInformacion';
import Unauthorized from './Pages/Unauthorized/Unauthorized';
import Dashboard from './Pages/Dashboard/Dashboard';
import Usuarios from './Pages/Usuarios/Usuarios';
import NotFound from './Pages/NotFound/NotFound';
import Informes from './Pages/Informes/Informes';
//----CustomHooks----
import useAuth from './hooks/useAuth';
//----Utils----
import { ROLES } from './utils/Rols';




function App() {
  const { modeDark } = useAuth();

  useEffect(() => {

    if (modeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }


  }, [modeDark])


  return (

    <Routes >

      <Route element={<LayoutLogin />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route>
        <Route path="/Unauthorized" element={<Unauthorized />} />
      </Route>
      <Route>
        <Route path="*" element={<NotFound />} />
      </Route>


      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />} >

          <Route path="/" element={<Dashboard />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Super, ROLES.Admin]} />}>
            <Route path="/ValidarInformacion" element={<CriteriosProvider><ValidarInformacion /></CriteriosProvider>} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/Informes" element={<Informes />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.provee, ROLES.Super]} />}>
            <Route path="/CargarArchivos" element={<CargarArchivos />} />
          </Route>


        </Route>
      </Route>



    </Routes>
  );
}

export default App;



