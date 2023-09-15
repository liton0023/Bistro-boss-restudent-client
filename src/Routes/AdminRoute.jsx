import { useContext } from "react";
import { useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";


const AdminRoute = () => {
    const{user,loading}=useContext(AuthContext);
    const location=useLocation();
    const [isAdmin, isAdminLoading]=useAdmin();


    if(loading  || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
      return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;