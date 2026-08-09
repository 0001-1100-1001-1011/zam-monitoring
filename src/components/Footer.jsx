const Footer = ({ children }) => {
  return (
    <footer
      id="bottom"
      className="flex fixed border-t bottom-0 left-0 w-full bg-zinc-900"
    >
      <div className="h-12 w-full bg-zinc-900 flex items-center justify-center">
        {children}
      </div>
    </footer>
  );
};

export default Footer;
