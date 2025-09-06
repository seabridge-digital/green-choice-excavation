export default function Header() {
  return (
    <header className="fixed top-0 w-full z-20 absolute flex justify-between items-center p-4 bg-transparent">
      <img
        src="/green-choice-excavation-logo.png"
        alt="Green Choice Excavation Logo"
        className="h-10 w-auto"
      />
      <nav className="space-x-6 text-white">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#gallery" className="hover:underline">Gallery</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}