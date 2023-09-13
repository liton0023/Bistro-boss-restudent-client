import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SingUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit= (data) => {
        console.log(data)
    }
    console.log(watch("example"))
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-2/3 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" {...register("firstName")} name="FirstName" placeholder="First Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" {...register("LastName")} name="LastName" placeholder="Last Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} name="password"  placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Sing Up" />
              </div>
              <p className='text-center'> <small> <Link to='/login'>Already Registred? Go To Log In</Link> </small> </p>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SingUp;