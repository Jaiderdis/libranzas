import { useContext, useDebugValue } from "react";
import AuthContext from "../Context/AuthContext";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    return useContext(AuthContext);
}

export default useAuth;