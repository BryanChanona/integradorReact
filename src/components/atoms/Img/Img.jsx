import '../../Hoja-estilos/Img.css'

const Img =(props)=>{
    return(
        <img src={props.src} alt={props.alt} className="img" />
    );
}
export default Img;