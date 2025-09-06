interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrolled: boolean;
}

export default function Header({ menuOpen, setMenuOpen, scrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-colors ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6">
        <div className="flex justify-start">
          <img src="/logo-svg.svg" alt="Green Choice Excavation Logo" className="h-10 w-auto" />
        </div>
        <div className="flex justify-center">
          <span className={`text-sm md:text-lg font-semibold ${scrolled ? "text-black" : "text-white"}`}>Green Choice Excavation</span>
        </div>
        <nav className={`hidden md:flex justify-end space-x-6 items-center ${scrolled ? "text-black" : "text-white"}`}>
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`focus:outline-none ${scrolled ? "text-black" : "text-white"}`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center text-center space-y-4 py-6">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  )
}