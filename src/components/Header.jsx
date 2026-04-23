import Eye from "../assets/eye.jsx";

const Header = () => {
  return (
    <div id="bottom" className="flex fixed top-0 letf-0 w-full border-b">
      <div className="flex items-center w-52 border border-red-600 bg-red-600 p-2 gap-1">
        <Eye />
        <p className="whitespace-nowrap font-bold underline">ZAM Monitoring</p>
      </div>
    </div>
  );
};

export default Header;
