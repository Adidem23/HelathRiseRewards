import logoImage from '../Images/SukunaLogo.png';
import iconImage1 from '../Images/Linkedin.png';
import iconImage2 from '../Images/Instagram.png';
import iconImage3 from '../Images/Github.png';
import '../Components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logoImage} alt="Logo" />
                <span className="logo-text">Posify</span>

            </div>
            <a href="https://www.linkedin.com/in/aditya-suryawanshi-945145235/"><img src={iconImage1} alt="Icon 1" className="icon1" /></a>
            <img src={iconImage2} alt="Icon 2" className="icon2" />
            <img src={iconImage3} alt="Icon 3" className="icon3" />
            
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <input id="checkbox" name="checkbox" type="checkbox" />
            <label className="label" htmlFor="checkbox">
            </label>
            <button className="connect-button">Connect</button>
        </nav>
    );
};

export default Navbar;
