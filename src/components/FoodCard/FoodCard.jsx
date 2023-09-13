import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch]=useCart();

  const { user } = useContext(AuthContext);
  const { name, image, price, recipe, _id } = item;
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderItem = { menuItemId: name, image, price, email: user.email };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Pleace Login?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 my-4 h-[541px] bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="rounded-xl" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 w-1/6 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline uppercase border-0 border-b-4 mt-4"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
