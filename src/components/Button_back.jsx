import { Navigate, useNavigate } from "react-router";

const Button_back = ({ text, link, type }) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      onClick={() => navigate(link)}
      className="border border-red-600 bg-zinc-800 text-white font-bold rounded-sm p-2 hover:bg-red-600 active:bg-red-500"
    >
      {text}
    </button>
  );
};

export default Button_back;
