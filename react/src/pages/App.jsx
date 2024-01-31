import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Films from "./Films.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import "../pages/App.jsx";
import "../css/App.css"


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/peliculas" element={<Films />} />
    <Route path="/nosotras" element={<AboutUs />} />
    <Route path="/contacto" element={<Contact />} />

    </Routes>

    </>
  );
}

export default App;
