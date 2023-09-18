import { HiHome, HiOutlineUpload } from 'react-icons/hi';
import { SiCodereview } from 'react-icons/si';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import { BiSolidReport } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';

export const links = [
    {
        label: 'Inicio',
        route: '/',
        icon: <HiHome size={20} />,
        roles: ['1', '2', '3']
    },
    {
        label: 'Cargar Archivos',
        route: '/CargarArchivos',
        icon: <HiOutlineUpload size={20} />,
        roles: ['1', '3']
    },
    {
        label: 'Revisar Criterios',
        route: '/ValidarInformacion',
        icon: <SiCodereview size={20} />,
        roles: ['1', '2']
    },
    {
        label: 'Conciliación',
        route: '/Login',
        icon: <FaHandshakeSimple size={20} />,
        roles: ['1', '2']
    },
    {
        label: 'Estadisticas',
        route: '/Login',
        icon: <IoStatsChart size={20} />,
        roles: ['1', '2']
    },
    {
        label: 'Informes',
        route: '/Informes',
        icon: <BiSolidReport size={20} />,
        roles: ['1', '2']
    },
    {
        label: 'Usuarios',
        route: '/Usuarios',
        icon: <FaUsers size={20} />,
        roles: ['1','2']
    },
    {
        label: 'Configuración',
        route: '/Login',
        icon: <AiFillSetting size={20} />,
        roles: ['1', '2']
    }
]

