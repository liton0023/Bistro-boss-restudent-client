import { useForm } from "react-hook-form";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
    }
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
         <button className="btn w-2/3 bg-[#D1A054]">UPDATE ITEM</button>
         </div>
        </form>
      </div>
    );
};

export default UpdateItem;