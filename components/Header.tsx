export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex justify-end space-x-6">
      <a href="#about" className="hover:underline">
        About
      </a>
      <a href="#projects" className="hover:underline">
        Projects
      </a>
      <a href="#contact" className="hover:underline">
        Contact
      </a>
      <a href="/resume.pdf" className="hover:underline">
        Resume
      </a>
    </nav>
  );
}
