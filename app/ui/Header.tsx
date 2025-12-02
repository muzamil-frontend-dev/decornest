export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">My E-Commerce Store</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
