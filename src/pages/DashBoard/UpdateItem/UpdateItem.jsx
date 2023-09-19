import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const UpdateItem = ({item}) => {
    console.log(item)
    const[menu,loading, refetch] =useMenu();
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const onSubmit = (data) => {
    console.log('click', data)
    const { name, price, category, recipe } = data;
    const updateItem = {
      name,
      price: parseFloat(price),
      category,
      recipe,
    };
    axiosSecure.put(`/menu/${item._id}`, updateItem)
    .then((res) => {
      console.log(res);
      if (res.data.updated) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
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
            {/* <input type="submit" className="btn w-2/3 bg-[#D1A054]" value="UPDATE ITEM" /> */}
          <button  className="btn w-2/3 bg-[#D1A054]" onClick={()=> onSubmit(data)} >UPDATE ITEM</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
