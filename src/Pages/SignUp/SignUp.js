import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);
  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password, data.name)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message);
    });

    reset();
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-2xl text-center font-semibold">SignUp</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="enter your Name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-amber-600	" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              placeholder="enter your email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-amber-600	" role="alert">
                {errors.email?.message}
              </p>
            )}
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
                pattern: {
                  value: /(?=.*\d)/,
                  message: "should contain at least one digit",
                },
              })}
              placeholder="enter your password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-amber-600	" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className="btn btn-secondary w-full mt-5 text-xl"
            type="submit"
            value="SignUp"
          />
        </form>
        <p className="text-center mt-3">
          Already SignUp?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn w-full bg-none border-secondary-content text-xl">
          <FcGoogle className="text-2xl" />
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
