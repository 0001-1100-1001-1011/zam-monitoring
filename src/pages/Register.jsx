import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Button_link_gray from "../components/Button_link_gray.jsx";
import Button_red from "../components/Button_red.jsx";
import RegisterForm from "../Components/RegisterForm.jsx";
import Eye from "../assets/eye.jsx";
import { Form } from "react-router";

export default function SignupForm() {
  return (
    <>
      {/* HEADER */}
      <Header />
      <div
        id="top"
        className="min-h-screen relative flex items-center justify-center"
      >
        {/* MAIN CONTAINER */}
        <div
          id="container"
          className="flex-col p-10 gap-10 border-2 border-red-600 rounded-sm bg-zinc-800"
        >
          <div id="title" className="pb-6">
            <Eye />
            <h1 className="text-3xl font-bold ">ZAM Monitoring</h1>
          </div>
          {/* FORM */}
          <RegisterForm />

          <div className="flex flex-row gap-3 ">
            {/* BACK */}
            <Button_link_gray type="back" text="Back" link="/login" />
            {/* SIGN UP */}
            <Button_red text="Sign up" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
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
