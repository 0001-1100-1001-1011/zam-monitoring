const Footer = ({ children }) => {
  return (
    <div id="bottom" className="flex fixed border-t bottom-0 left-0 w-full bg-zinc-900">
      <div className="flex justify-center items-center w-full p-2">{children}</div>
    </div>
  );
};

export default Footer;
