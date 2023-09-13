import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SingUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const {createUser}=useContext(AuthContext);

      const onSubmit= (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
    }
    console.log(watch("example"))
    return (
       <>
       <Helmet>
            <title>BISTRO BOSS | SINGUP</title>
          </Helmet>
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
                <input type="text" {...register("firstName",{ required: true, maxLength: 20 })} name="firstName" placeholder="First Name" className="input input-bordered" />
                {errors.firstName && <span className="text-red-600">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" {...register("LastName", { required: true },{ pattern: /^[A-Za-z]+$/i })} name="LastName" placeholder="Last Name" className="input input-bordered" />
                {errors.LastName && <span className="text-red-600">Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender Selection</span>
                </label>
                <select className="input input-bordered" {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input type="number" className="input input-bordered" name="age" {...register("age", { required: true, min: 18, max: 99 })} />
                {errors.age && <span className="text-red-600">Age field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true,minLength:6,maxLength:20, pattern:/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/ })} name="password"  placeholder="password" className="input input-bordered" />
                {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p> )}
                {errors.password?.type === "minLength" && (<p className="text-red-600">Password is gather then 6 chackter</p> )}
                {errors.password?.type === "maxLength" && (<p className="text-red-600">Password is lass then 20 chackter</p> )}
                {errors.password?.type === "pattern" && (<p className="text-red-600">Password is uppercase one lower case and one spacial chackter</p> )}
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Sing Up" />
              </div>
              <p className='text-center'> <small> <Link to='/login'>Already Registred? Go To Log In</Link> </small> </p>
            </div>
          </form>
        </div>
      </div>
       </>
    );
};

export default SingUp;