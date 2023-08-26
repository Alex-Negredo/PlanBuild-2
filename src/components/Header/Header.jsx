import logo from "../../assets/Logo Blue & White.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {

  return (
    <section className="header">
        
        <Link to="/" className="header__link" >
            <img src={logo} className="header__logo" alt="logo" />
        </Link>

        <div className="header__username">Alex Negredo</div>
        
    </section>
  )
}

export default Header