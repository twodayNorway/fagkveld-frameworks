import "./Header.css"
import {useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    //check out navbar from bootstrap
    return (
        <div className="header">
            <div className="btn-group">
                <button className="btn" onClick={()=>navigate("/")}>Oversikt</button>
                <button className="btn" onClick={()=>navigate("nyansatt")}>Nyansatt</button>
                <button className="btn">Administrasjon</button>
            </div>
            <div>
                Logg ut
            </div>
        </div>
    )
}

export default Header;