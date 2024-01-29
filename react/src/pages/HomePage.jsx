import "../css/App.css";
import "../css/HomePage.css";
import logorci from "../assets/images/logorci.png";

function HomePage() {
  return (
    <div class="logocontainer">
      <img className="logorci" src={logorci} alt="Logo RCI" />
    </div>
  );
}
export default HomePage;
