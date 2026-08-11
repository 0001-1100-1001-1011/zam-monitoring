import Eye from "../assets/eye.jsx";

const Header = () => {
  return (
    <header id="bottom" className="h-12 w-full border-b bg-zinc-900">
      <div className="h-full flex items-center w-55 border border-red-600 bg-red-600 p-2 ">
        <Eye />
        <p className="whitespace-nowrap font-bold underline">ZAM Monitoring</p>
      </div>
    </header>
  );
};

export default Header;
