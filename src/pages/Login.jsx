import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Button_link_gray from "../components/Button_link_gray.jsx";
import Button_red from "../components/Button_red";
import LoginErrorCard from "../components/LoginErrorCard.jsx";
import Eye from "../assets/eye.jsx";
import React from "react";

export default function SingIn() {
  let setIsAuthenticated = true; // this will have to be changed with a real auth system
  const [user, setUser] = useState({ username: "", password: "" }); //this is referring to the user loggin in, the admin
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "username" && value && value.length >= 4) {
        delete newErrors.username;
      }
      if (name === "password" && value && value.length >= 8) {
        delete newErrors.password;
      }
      return newErrors;
    });
  };

  const validate = () => {
    const errors = {};
    if (!user.username) {
      errors.username = "Username is required";
    } else if (user.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const loginSucess = await login(setIsAuthenticated);
      if (loginSucess) {
        navigate("/dashboard");
      }
    }

    function login() {
      console.log("Login clicked");
    }
  };

  return (
    <>
      <Header />
      <div id="top" className="min-h-screen relative flex items-center justify-center">
        <div
          id="container"
          className="flex p-10 gap-10 border-2 border-red-600 rounded-sm bg-zinc-800"
        >
          <div id="title" className="pb-6">
            <Eye />
            <h1 className="text-3xl font-bold underline">ZAM Monitoring</h1>
          </div>

          <div id="center" className="flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold">Sign in to your account</h2>
            <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-3 w-64">
              <div id="usernameContainer" className="w-full">
                <label htmlFor="username" className="flex w-full left-0">
                  Username
                </label>
                <input
                  onChange={handleChange}
                  name="username"
                  type="username"
                  required
                  minLength="4"
                  placeholder="Enter username"
                  className={`border w-full p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-white login-input ${
                    errors.username ? "invalid" : user.username.length >= 4 ? "valid" : ""
                  }`}
                />
              </div>

              <div id="passwordContianer" className="w-full">
                <label htmlFor="password" className="flex left-0">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  required
                  minLength="8"
                  placeholder="Enter password"
                  className={`border w-full p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-white ${errors.password ? "invalid" : user.password.length >= 8 ? "valid" : ""}`}
                />
              </div>

              <Button_red type="submit" text="Sign in" />
              <LoginErrorCard errorMessage={errors.username} x_pos="117%" y_pos="0%" />
              <LoginErrorCard errorMessage={errors.password} x_pos="117%" y_pos="40%" />
            </form>
          </div>
        </div>
      </div>

      <Footer
        children={
          <Button_link_gray
            text="Check out the source code!"
            link="https://github.com/0001-1100-1001-1011/zam-monitoring"
          />
        }
      />
    </>
  );
}
