import React, { useContext } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
     reset()
  };
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-2xl text-center font-semibold">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              })}
              placeholder="enter your email"
              className="input input-bordered text-accent"
            />
            {errors.password && (
              <p className="text-amber-600	" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          {loginError && <p>{loginError}</p>}
          <input
            className="btn btn-secondary w-full mt-5 text-xl"
            type="submit"
            value="LOGIN"
          />
        </form>
        <p className="text-center mt-3">
          New to BD-Diagonostics?{" "}
          <Link className="text-primary" to="/signup">
            create new account
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

export default Login;
