import Axios from "../Api/Axios";
import  axiosPrivate  from "../Api/Axios";

const URl_AUTH={

 Login: '/Auth/Login',
 DeleteToken: '/Auth/EliminarRefreshToken'
}



export const loginUser = async (credenciales) => {

    const response = await Axios.post(URl_AUTH.Login,credenciales )
    return response;

  };


  export const logout = async (RequestTokens) => {
    const response = await Axios.post(URl_AUTH.DeleteToken,RequestTokens)
    return response;

  };