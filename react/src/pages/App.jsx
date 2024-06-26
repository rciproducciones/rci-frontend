import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Films from "./Films.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import FilmDetails from "./FilmDetails.jsx";
import "../pages/App.jsx";
import "../css/App.css"


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/producciones" element={<Films />} />
    <Route path="/equipo" element={<AboutUs />} />
    <Route path="/contacto" element={<Contact />} />
    <Route path="/filmId" element={<FilmDetails />} />

    </Routes>

    </>
  );
}

export default App;
