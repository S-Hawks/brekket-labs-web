import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="card bg-base-100 shadow-2xl w-full max-w-md">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-cyan-800">Welcome Back!</h1>
            <p className="text-base font-medium text-gray-600 mt-2">
              Login to continue your journey
            </p>
          </div>

          <form>
            <fieldset className="fieldset text-base font-medium space-y-4">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full text-gray-600"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full text-gray-600"
                  placeholder="********"
                  required
                />
              </div>
              <div>
                <Link className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn bg-cyan-700 text-white w-full hover:bg-cyan-800"
              >
                Log in
              </button>
            </fieldset>
          </form>

          <div className="divider">OR</div>

          <button className="btn btn-outline w-full hover:bg-green-100">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:text-green-700 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
