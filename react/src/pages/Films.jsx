import "../css/App.css";
import Header from "../components/Header";
import CatalogPage from "../components/CatalogPage";
import Footer from "../components/Footer";

const imageSrc = '../src/assets/images/producciones-cover.jpeg';

function Films() {
  return (
    <>
      
      <Header></Header>
      <div>
      <img className="cover-img" src={imageSrc} alt="Producciones Cover" />
      </div>
      <div>
        <CatalogPage></CatalogPage>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Films;
