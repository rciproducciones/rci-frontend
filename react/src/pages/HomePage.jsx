import { useLocation } from "react-router-dom";
import "../css/HomePage.css";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CatalogPage from "../components/CatalogPage";
import Footer from "../components/Footer";

function HomePage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`home-page-container ${isHomePage ? "transparent-header" : "normal-header"}`}>
      <Header isTransparent={isHomePage} />
      <Carousel />
      <CatalogPage />
      <Footer />
    </div>
  );
}

export default HomePage;
