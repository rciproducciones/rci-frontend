import "../css/App.css";
import Header from "../components/Header";
import "../css/Contact.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const imageSrc = "../assets/images/contacto-cover.png";

function Contact() {
  return (
    <>
      <Header></Header>
      <div>
        <img className="cover-img" src={imageSrc} alt="Producciones Cover" />
      </div>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
export default Contact;
