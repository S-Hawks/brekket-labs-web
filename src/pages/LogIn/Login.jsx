import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
  const { signIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password);
    try {
      const userCredential = await signIn(email, password);
      const user = userCredential.user;

      const dbResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      //console.log("Status:", dbResponse.status);
      //const data = await dbResponse.json().catch(() => ({}));
      //console.log("Server data:", data);

      if (!dbResponse.ok) {
        alert("Access denied");
        return;
      }
      alert(`Welcome ${user.displayName}! Login successful.`);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message || "Login failed");
    }
  };

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
          {/* LogIn Form */}
          <form onSubmit={handleLogIn}>
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
