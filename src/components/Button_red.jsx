const Button_red = ({ text }) => {
  return (
    <button
      type="submit"
      className="border-1 border-red-600 bg-red-600 text-white font-bold rounded-sm p-2 hover:bg-zinc-900 active:bg-red-00"
    >
      {text}
    </button>
  );
};

export default Button_red;
