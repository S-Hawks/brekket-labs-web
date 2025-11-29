import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";

const Register = () => {
  const { createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const role = e.target.role.value;
    const password = e.target.password.value;
    //console.log(name, email, role, password);

    // Password Validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase letter.");
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      await updateUser({
        displayName: name,
      });

      const dbResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          role: role,
          password: password,
        }),
      });
      if (!dbResponse.ok) {
        alert("Failed to save user to database");
      }

      //const data = await dbResponse.json();
      //console.log("User saved to database:", data);
      alert(`Welcome ${user.displayName}! Registration successful.`);
      navigate("/login");
      e.target.reset();
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message || "Registration failed");
    }
  };

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
          <form onSubmit={handleRegister}>
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
                name="role"
                defaultValue=""
                className="select w-full"
                required
              >
                <option value="" disabled>
                  Pick an admin role
                </option>
                <option value="Super Admin">Super Admin</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
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
