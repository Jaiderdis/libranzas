import axiosPrivate from '../Api/Axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {cookies,saveUser} = useAuth();

    const refresh = async () => {
  
        const requestData = {
            TokenExpirado: cookies.token,
            RefreshToken: cookies.refreshToken
          };

        const response = await axiosPrivate.post('/Auth/ObtenerRefreshToken', requestData, {
            withCredentials: true
        });

        if(response?.data?.success){
            saveUser({ token: response.data.result.token, refreshToken:response.data.result.refreshToken})
        }else if(response?.data?.message==='El token aun no ha expirado'){
            return cookies.token;
        }
        
       
        return response.data.result.token
    }
    return refresh;
};

export default useRefreshToken;
