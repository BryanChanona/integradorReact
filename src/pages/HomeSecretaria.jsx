import Header from "../components/molecules/Header/Header";
import Nav from "../components/molecules/Nav/Nav.jsx";
import Footer from "../components/organisms/Footer/Footer.jsx";
import '../components/Hoja-estilos/HomeEstilo.css'

const HomeSecretaria =()=>{
    return(
        <>
       <Header/>     
       <Nav/>
       <div className="image-container">
                <img src="src/assets/ImageResources/img1.png" alt="Imagen 1" className="image-item" />
                <img src="src/assets/ImageResources/imagen2.png" alt="Imagen 2" className="image-item" />
                <img src="src/assets/ImageResources/img3.png" alt="Imagen 3" className="image-item" />
                <img src="src/assets/ImageResources/img4.png" alt="Imagen 3" className="image-item" />
               
                
            </div>
           
       <Footer/>
       
       </>
    );
}
export default HomeSecretaria