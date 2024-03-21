import "../css/App.css";
import Header from "../components/Header";
import "../css/FilmDetails.css";
import Footer from "../components/Footer";
import FilmDescription from "../components/FilmDescription";

const imageSrc = 'src/assets/images/producciones-cover.jpeg';

function FilmDetails() {
    return(
        <>
<Header></Header>
<div>
      <img className="cover-img" src={imageSrc} alt="Producciones Cover" />
      </div>
<FilmDescription></FilmDescription>
<Footer></Footer>
</>

    )
}
export default FilmDetails;