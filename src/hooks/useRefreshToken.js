import axios from '../Api/Axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {auth, setAuth ,cookies,guardarUsuario} = useAuth();

    const refresh = async () => {

        const TokenExpirado=localStorage.getItem("token")
        const RefreshToken=localStorage.getItem("refreshToken")

        
        const requestData = {
            TokenExpirado: cookies.token,
            RefreshToken: cookies.refreshToken
          };



        const response = await axios.post('/Auth/ObtenerRefreshToken', requestData, {
            withCredentials: true
        });

        if(response.data.resultado){

            guardarUsuario({ token: response.data.token, refreshToken:response.data.refreshToken})

            // setAuth(prev => {

            //     return { ...prev, datos:{infoToken:{
            //         token:response.data.token,
            //         refreshToken:response.data.refreshToken
            //         }}  
            //     }
            // });
        }
       
        return response.data.token;
    }
    return refresh;
};

export default useRefreshToken;
