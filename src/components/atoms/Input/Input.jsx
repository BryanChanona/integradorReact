import '../../Hoja-estilos/Input.css'

const Input =(props)=>{

    return(
        <input type="text" className="input" placeholder={props.placeholder} />
    );
}
export default Input;