import { Outlet, Link } from "react-router-dom";
import '../styles/navbar.css';
const Layout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="text-asphalt-200 bg-asphalt-700 h-17 w-full font-BebasNeue text-xl">
          <nav>
            <ul>
              <li>
                <Link className="px-4 py-2 mx-2 text-asphalt-200 hover:text-white hover:bg-asphalt-900 rounded-lg transition-all duration-300 transform hover:scale-105" to="/" >Home</Link>
              </li>
              <li>
                <Link className="px-4 py-2 mx-2 text-asphalt-200 hover:text-white hover:bg-asphalt-900 rounded-lg transition-all duration-300 transform hover:scale-105" to="/Settings">Settings</Link>
              </li>
              <li>
                <Link className="px-4 py-2 mx-2 text-asphalt-200 hover:text-white hover:bg-asphalt-900 rounded-lg transition-all duration-300 transform hover:scale-105" to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow bg-asphalt-200">
          <Outlet />
        </main>
        <footer className="bg-asphalt-700 text-asphalt-200 text-center p-4">
          <p>© 2025 CAJMA</p>
        </footer>
      </div>
    </>
  )
};

export default Layout;