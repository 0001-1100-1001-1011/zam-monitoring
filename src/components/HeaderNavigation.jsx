import Eye from "../assets/eye.jsx";
import { Navigate, useNavigate } from "react-router";

const HeaderNavigation = () => {
  const navigate = useNavigate();
  return (
    <header id="bottom" className=" flex h-12 w-full border-b bg-zinc-900">
      <div className="h-full flex items-center w-55 border border-red-600 bg-red-600 p-2 ">
        <Eye />
        <p className="whitespace-nowrap font-bold underline">ZAM Monitoring</p>
      </div>

      <div className=" flex gap-2 ml-5">
        <button
          type={"button"}
          onClick={() => navigate("/dashboard")}
          className="border border-none bg-zinc-900 text-white font-bold rounded-sm p-2 hover:bg-red-600 active:bg-red-500 w-30"
        >
          {"Dashboard"}
        </button>
        <button
          type={"button"}
          onClick={() => navigate("/users")}
          className="border border-none bg-zinc-900 text-white font-bold rounded-sm p-2 hover:bg-red-600 active:bg-red-500 w-30"
        >
          {"Users"}
        </button>
        <button
          type={"button"}
          onClick={() => navigate("/hosts")}
          className="border border-none bg-zinc-900 text-white font-bold rounded-sm p-2 hover:bg-red-600 active:bg-red-500 w-30"
        >
          {"Hosts"}
        </button>
        <button
          type={"button"}
          onClick={() => navigate("/logs")}
          className="border border-none bg-zinc-900 text-white font-bold rounded-sm p-2 hover:bg-red-600 active:bg-red-500 w-30"
        >
          {"Logs"}
        </button>
      </div>
    </header>
  );
};

export default HeaderNavigation;
