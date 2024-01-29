import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import "../pages/App.jsx";
import "../css/App.css"

function App() {
  return (
    <>
    <Routes>
    <Route path="/homepage" element={<HomePage />} />
    </Routes>

    </>
  );
}

export default App;
