import axiosPrivate from '../Api/Axios';
import useAuth from './useAuth';
import {CodeErrors} from '../utils/CodeErrors';

const useRefreshToken = () => {
    const {cookies,saveUser,outLogin} = useAuth();

    const refresh = async () => {
  
        const requestData = {
            TokenExpirado: cookies.token,
            RefreshToken: cookies.refreshToken
          };
          try {
            const response = await axiosPrivate.post('/Auth/ObtenerRefreshToken', requestData, {
                withCredentials: true
            });
            
            if(response?.data?.success){
                saveUser({ token: response.data.result.token, refreshToken:response.data.result.refreshToken})
                return response.data.result.token
            }else if(response.data.code===CodeErrors.TokenAunVigente){
                return cookies.token;
            }else{
                outLogin()
            }
          } catch (error) {
            outLogin()
          }

          return null;

        
        
       
       
    }
    return refresh;
};

export default useRefreshToken;
