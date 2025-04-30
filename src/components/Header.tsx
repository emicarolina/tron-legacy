const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="text-tron-blue text-2xl font-bold">
        <a href="/">TRON: Legacy</a>
      </div>
      <nav className="space-x-4 text-white text-lg md:flex md:space-x-8">
        <a
          href="#about"
          className="font-prompt  hover:text-tron-blue transition"
        >
          Sobre
        </a>
        <a
          href="#gallery"
          className="font-prompt hover:text-tron-blue transition"
        >
          Galeria
        </a>
        <a
          href="#legacy"
          className="font-prompt hover:text-tron-blue transition"
        >
          Legado
        </a>
      </nav>
    </header>
  );
};

export default Header;
