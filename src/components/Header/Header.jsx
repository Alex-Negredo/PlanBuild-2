import logo from "../../assets/Logo Blue & White 2.svg";
import userpic from '../../assets/PROFILE PICTURE.svg'
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {

  return (
    <section className="header">
        
        <Link to="/projects" className="header__link" >
            <img src={logo} className="header__logo" alt="logo" />
        </Link>

        <div className="header__user">
          <img src={userpic} className="header__pic" alt='userpic' />
          <div className="header__username">Alex Negredo</div>
        </div>
        
    </section>
  )
}

export default Header