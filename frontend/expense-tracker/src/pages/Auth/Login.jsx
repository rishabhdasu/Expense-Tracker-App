import React, { useState, useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import { axiosInstance } from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import { UserContext } from "../../context/UserContext";
import Spinner from "../../components/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Handle Login Form Submit

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");
    setIsLoading(true);

    // Login API Call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong.Please try again");
      }
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w[70%] h-3/4 md:h-full flex flex-col justify-center mt-8">
        <h1 className="text-xl font-semibold text-black">Welcome back</h1>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to login
        </p>
        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />
          <div className="h-5 mt-1">
            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          </div>
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner size={`h-4 w-4`} color={`border-white`} />{" "}
              </>
            ) : (
              "Login"
            )}
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Dont' have an account?{" "}
            <Link className="font-medium text-primary underline" to="/SignUp">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
