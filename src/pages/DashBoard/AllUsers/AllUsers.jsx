import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin=(id)=>{
    
  }

  const handleDelete = (user) => {
    // TODO
  };
  return (
    <div className="w-full p-4">
      <Helmet>
        <title>BISTRO BOSS | All USERS</title>
      </Helmet>
      <h1 className="text-2xl uppercase">Total users : {users.length}</h1>

      <div className="overflow-x-auto  rounded-t-lg mt-4 ">
        <table className="table table-xs">
          <thead className="uppercase h-[60px] text-white bg-[#D1A054]">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-ghost btn-sm text-white bg-orange-500"
                  >
                    <FaUserShield></FaUserShield>
                  </button>
                   
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-sm text-white bg-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
