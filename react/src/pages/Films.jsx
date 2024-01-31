import "../css/App.css";
import Header from "../components/Header";
import CatalogPage from "../components/CatalogPage";
import Footer from "../components/Footer";

function Films() {
  return (
    <>
      
      <Header></Header>
      <div>
        <CatalogPage></CatalogPage>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Films;
