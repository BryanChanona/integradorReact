import Img from "../../atoms/Img/Img";
import Logo from '../../../assets/ImageResources/avatar.png';
import './avatar.css';

function NavBar({ imagen, onImageClick }) {
    return (
        <div className="contentHeader1">
            <div className="Section1">
                <div className="img1">
                    <Img src={imagen} />
                </div>
            </div>
            <div className="Section2">
                <div className="img" onClick={onImageClick}>
                    <Img src={Logo} />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
