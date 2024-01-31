import "../css/Header.css";
import { Link } from "react-router-dom";
import logorci from "../assets/images/logorci.png";

function Header() {
    return(
        <>
        <div className="logocontainer">
        <img className="logorci" src={logorci} alt="Logo RCI" />
      </div>

      <div className="navbar bg-zinc-50 flex justify-center">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-50 rounded-box w-52"
          >
            <li>
            <Link to="/">Inicio</Link>
            </li>
            <li>
            <Link to="/peliculas">Películas</Link>
            </li>
            <li>
            <Link to="/nosotras">Nosotras</Link>
            </li>
            <li>
            <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link to="/">Inicio</Link>
            </li>
            <li>
            <Link to="/peliculas">Películas</Link>
            </li>
            <li>
            <Link to="/nosotras">Nosotras</Link>
            </li>
            <li>
            <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      </>
    )
}

export default Header;