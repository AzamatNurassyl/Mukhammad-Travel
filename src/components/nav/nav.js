import "./style.css";
import "../../styles/media.css";
import { NavLink } from "react-router-dom";

const Nav = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return ( 
        <>
        <div className="navigation">
            <div className="container container--nav">
            <nav className="nav">
                         <NavLink to="/" className="logo">
                                Mukhammad Travel
                        </NavLink>

                <ul className="nav-list">
                    <li className="nav-list__item ">
                    <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink }>Home</NavLink>
                    </li>
                
                    <li className="nav-list__item">
                    <NavLink to="/Hotel" className={({isActive}) => isActive ? activeLink : normalLink }>Hotels</NavLink>
                    </li>
                
                    <li className="nav-list__item">
                    <NavLink to="/AboutUs" className={({isActive}) => isActive ? activeLink : normalLink }>About Us</NavLink>
                    </li>
                    <li className="nav-list__item">
                    <NavLink to="/Destination" className={({isActive}) => isActive ? activeLink : normalLink }>Destination</NavLink>
                    </li>
                    <li className="nav-list__item">
                    <NavLink to="/Activities" className={({isActive}) => isActive ? activeLink : normalLink }>Activities</NavLink>
                    </li>
                    <li className="nav-list__item">
                    <NavLink to="/Contacts" className={({isActive}) => isActive ? activeLink : normalLink }>Contacts</NavLink>
                    </li>
                </ul>
                    <button className="mobile-nav-btn">
                        <div className="nav-icon"></div>
                    </button>
             </nav>
             </div> 
        </div>   
        </>
     );
}
 
export default Nav;