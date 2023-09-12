import { useEffect, useRef, useState } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disable, setDisable]=useState(true);
    const captchaRef=useRef();
 
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    }, [])

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
    }

    const handleCaptcha=()=>{
        const user_captcha_value=captchaRef.current.value;

        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-2/3 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password"  placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name="Captcha"  placeholder="Write the text" className="input input-bordered" />
                <button onClick={handleCaptcha} className="btn btn-outline btn-accent mx-auto mt-4 w-1/2">Valied</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disable}  className="btn btn-primary" type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;