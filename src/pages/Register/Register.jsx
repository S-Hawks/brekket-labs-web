import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="card w-full bg-base-100 max-w-md shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-cyan-800">
              Join Brekket.Labs
            </h1>
            <p className="text-base font-medium text-gray-600 mt-2">
              Create your account to get started
            </p>
          </div>
          <form>
            <fieldset className="fieldset text-base font-medium">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="input w-full text-gray-400"
                placeholder="your Full name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="input w-full text-gray-400"
                placeholder="example@gmail.com"
                required
              />
              <label>Role</label>
              <select
                defaultValue="Pick an admin role"
                className="select w-full"
              >
                <option disabled={true}>Pick an admin role</option>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Moderator</option>
              </select>

              <label>Password</label>
              <input
                type="password"
                name="password"
                className="input w-full text-gray-400"
                placeholder="********"
                required
              />
              <button
                type="submit"
                className="btn bg-cyan-700 text-white w-full hover:bg-cyan-800 mt-4"
              >
                Register
              </button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full hover:bg-green-100">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:text-green-700 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
