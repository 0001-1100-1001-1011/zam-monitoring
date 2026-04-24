const LoginErrorCard = ({ errorMessage, y_pos, x_pos }) => {
  return (
    <div
      id="loginErrorCard"
      style={{ top: y_pos, left: x_pos }}
      className={`absolute flex w-60 h-20 border border-red-600 bg-red-600 font-bold font-white items-center p-3 transition-all duration-500 ${
        errorMessage ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
      }`}
    >
      {errorMessage}
    </div>
  );
};

export default LoginErrorCard;
