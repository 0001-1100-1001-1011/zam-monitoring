const Header = () => {
  return (
    <div className="flex fixed top-0 left-0 w-full border-b">
      <div className="flex items-center w-52 border border-red-600 bg-red-600 p-2 gap-1">
        <span className="text-xl">←</span>
        <p className="whitespace-nowrap font-bold underline">Dashboard</p>
      </div>
    </div>
  );
};

export default Header;
