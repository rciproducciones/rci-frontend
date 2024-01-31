import "../css/App.css";
import "../css/HomePage.css";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CatalogPage from "../components/CatalogPage";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <>
        <Carousel></Carousel>
      </>
      <Header></Header>
      <div>
        <CatalogPage></CatalogPage>
      </div>
      <Footer></Footer>
    </>
  );
}
export default HomePage;
