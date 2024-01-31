import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Films from "./Films.jsx";
import "../pages/App.jsx";
import "../css/App.css"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/peliculas" element={<Films />} />
    </Routes>

    </>
  );
}

export default App;
