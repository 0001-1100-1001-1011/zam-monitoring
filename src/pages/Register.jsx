import { useState } from "react";
import { useNavigate } from "react-router";
import { registerService } from "../../services/registerService.js";
import LoginErrorCard from "../components/LoginErrorCard.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Button_link_gray from "../components/Button_link_gray.jsx";
import Eye from "../assets/eye.jsx";
import Button_back from "../components/Button_back.jsx";

export default function SignupForm() {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

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
    if (!data.username) {
      errors.username = "Username is required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const loginSucess = await registerService(data);
      if (loginSucess) {
        console.log("Done");
        navigate("/login");
      }
    }
  };

  return (
    <>
      <Header />
      <div id="top" className="min-h-screen relative flex items-center justify-center">
        <div className="mainContainer flex-col p-10 gap-10 border-2 border-red-600 rounded-sm bg-zinc-800">
          <div id="title" className="pb-6">
            <Eye />
            <h1 className="text-3xl font-bold ">ZAM Monitoring</h1>
          </div>

          <form className="relative flex gap-3 flex-col border-red-600 mb-3">
            <div>
              <label> Username </label>
              <input
                onChange={handleChange}
                name="username"
                type="username"
                required
                minLength="4"
                placeholder="Enter username"
                className={`border w-full p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-white login-input ${
                  errors.username ? "invalid" : data.username.length >= 4 ? "valid" : ""
                }`}
              />
            </div>

            <div>
              <label> E-Mail </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="E-Mail"
                required
                minLength="6"
                className="
                border
                w-full
                p-2
                rounded-sm
                focus:outline-none
                focus:ring-2
                focus:ring-white"
              />
            </div>
            <div>
              <label> Password </label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                required
                minLength="8"
                placeholder="Enter password"
                className={`border w-full p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-white ${errors.password ? "invalid" : data.password.length >= 8 ? "valid" : ""}`}
              />
            </div>

            <LoginErrorCard errorMessage={errors.username} x_pos="112%" y_pos="0%" />
            <LoginErrorCard errorMessage={errors.password} x_pos="112%" y_pos="40%" />
          </form>

          <div className="buttonContainer flex flex-row gap-3 ">
            <Button_back type="back" text="Back" link="/login" />

            <button
              className="border border-red-600 bg-red-600 text-white font-bold rounded-sm p-2 hover:bg-zinc-900 active:bg-red-00"
              onClick={handleSubmit}
            >
              Register
            </button>
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
