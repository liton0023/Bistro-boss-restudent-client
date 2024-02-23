import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const {data: menu=[], isLoading: loading , refetch}=useQuery({
        queryKey: 'menu',
        queryFn: async()=>{
            const res = await fetch('https://bistro-boss-server-d7untuw93-md-liton-mahmuds-projects.vercel.app/menu');
            return res.json()
        }
    })
    // console.log(menu)
    return [menu, loading, refetch]
};

export default useMenu;