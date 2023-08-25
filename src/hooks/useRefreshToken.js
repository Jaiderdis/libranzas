import axios from '../Api/Axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {cookies,guardarUsuario} = useAuth();

    const refresh = async () => {
  
        const requestData = {
            TokenExpirado: cookies.token,
            RefreshToken: cookies.refreshToken
          };

        const response = await axios.post('/Auth/ObtenerRefreshToken', requestData, {
            withCredentials: true
        });

        if(response?.data?.success){
            guardarUsuario({ token: response.data.result.token, refreshToken:response.data.result.refreshToken})
        }else if(response?.data?.message==='El token aun no ha expirado'){
            return cookies.token;
        }
        
       
        return response.data.result.token
    }
    return refresh;
};

export default useRefreshToken;
