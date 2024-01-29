import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import "../pages/App.jsx";

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
