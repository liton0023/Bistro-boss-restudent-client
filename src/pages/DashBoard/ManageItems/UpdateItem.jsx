import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const UpdateItem = () => {
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const [menu, loading, refetch] = useMenu();
  const [update, setUpdate] = useState();
  const navigate = useNavigate();

  const item = menu.find((item) => item._id === id);
  console.log(item._id);

  const onSubmit = (data) => {
    const { name, price, category, recipe } = data;
    console.log(name, data);
    const updateItem = {
      _id: id,
      name: name,
      price: parseFloat(price),
      category: category,
      recipe: recipe,
      image: item.image,
    };
    axiosSecure.put(`/menu/${item._id}`, updateItem).then((res) => {
      console.log("update", res.data);
      if (res.data.modifiedCount >= 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/manageitem");
        refetch();
      }
    });
  };
  return (
    <div className="w-full text-center">
      <SectionTittle
        subHeading={"whats new?"}
        heading={"updated item"}
      ></SectionTittle>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-8">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Racipe Name*</span>
          </label>
          <input
            {...register("name", { required: true, maxLength: 120 })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className=" flex mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>

            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option>pizza</option>
              <option>salad</option>
              <option>soup</option>
              <option>dessart</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="form-control w-full mx-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Racipe Deteails*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-48"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className=" my-8">
          <input
            type="submit"
            className="btn w-2/3 bg-[#D1A054]"
            value="UPDATE ITEM"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
