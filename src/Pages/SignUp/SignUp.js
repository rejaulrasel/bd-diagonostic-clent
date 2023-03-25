import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const handleSignUp = (data) => {
        console.log(data);
        reset();
      };

    return (
        <div className="h-[600px] flex justify-center items-center">
        <div className="w-96">
          <h1 className="text-2xl text-center">SignUp</h1>
          <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("text", { required: "text is required" })}
                placeholder="enter your text"
                className="input input-bordered text-accent"
              />
              {errors.name && <p role="alert">{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "email is required" })}
                placeholder="enter your email"
                className="input input-bordered text-accent"
              />
              {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "paassword is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 character long",
                  },
                })}
                placeholder="enter your email"
                className="input input-bordered text-accent"
              />
              {errors.password && <p role="alert">{errors.password?.message}</p>}
            </div>
            <input
              className="btn btn-secondary w-full mt-5 text-xl"
              type="submit"
              value="SignUp"
            />
          </form>
          <p className="text-center mt-3">
            New to BD-Diagonostics?{" "}
            <Link className="text-secondary" to="/signup">
              create new account
            </Link>
          </p>
          <div className="divider">OR</div>
  
          <button className="btn w-full bg-none border-secondary-content text-xl">
            <FcGoogle className="text-2xl" />CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    );
};

export default SignUp;