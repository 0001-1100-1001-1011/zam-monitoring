const Button_gray = ({ text, link }) => {
  return (
    <button
      onClick={() => window.open({ link }, "_blank")}
      className="border border-red-600 bg-zinc-800 text-white font-bold rounded-sm p-2 hover:bg-red-600 active:bg-red-500"
    >
      {text}
    </button>
  );
};

export default Button_gray;
