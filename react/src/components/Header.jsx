import { Link } from "react-router-dom";
import logorci from "../assets/images/logorci.png";
import "../css/Header.css";

function Header({ isTransparent }) {
  const headerClass = isTransparent ? "transparent-header" : "normal-header";

  return (
    <div className={`header-container ${headerClass}`}>
      <div className="navbar bg-zinc-50 flex flex-col lg:flex-column justify-between items-center">
        {" "}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-600 rounded-box w-52"
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/producciones">Producciones</Link>
            </li>
            <li>
              <Link to="/equipo">Equipo</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/producciones">Producciones</Link>
            </li>
            <li className="logo-container">
              <Link to="/" className="logorci-link"  style={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
                <img className="logorci" src={logorci} alt="Logo RCI" />
              </Link>
            </li>
            <li>
              <Link to="/equipo">Equipo</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
