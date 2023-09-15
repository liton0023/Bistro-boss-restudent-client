import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading}=useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('is Admin Responce',res)
            return res.data.admin;
        }
    })
    console.log(isAdmin)
    return [isAdmin ,isAdminLoading]
};

export default useAdmin;