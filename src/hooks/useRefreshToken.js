import axios from '../Api/Axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {auth, setAuth } = useAuth();

    const refresh = async () => {
        console.log("refresh")
        console.log(auth)
        const TokenExpirado=localStorage.getItem("token")
        const RefreshToken=localStorage.getItem("refreshToken")


        const response = await axios.post('/Auth/ObtenerRefreshToken', JSON.stringify({TokenExpirado , RefreshToken }), {
            withCredentials: true
        });

        // if(response.data){

        // }
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.token);
            return { ...prev, datos:{infoToken:{
                token:response.data.token,
                refreshToken:response.data.refreshToken
                }}  
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
