import "./style.css";
import search from "../../img/icons/search.svg";
import "./buttons.css";
// import "../../utils/react-country.css";
import { NavLink } from "react-router-dom";
const Header = () => {


    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return ( 
        <header className="header">
        <div className="container container--header">

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
            </nav>

            <div className="header__content">
                <ul className="header__title">
                    Welcome to Saudi Arabia
                </ul>
    
            </div>
        
            <form action="" className="form">

                <div className="form__input-wrapper form__input--location">
                    <label  htmlFor="location" className="form__label">Location</label>
                   
                   <input  type="text" className="form__input" id="location" placeholder="Saudi Arabia"/>
                      
                </div>

                <div className="form__input-wrapper form__input--activity">
                    <label htmlFor="activity" className="form__label">Activity</label>
                    <select name="activity" id="activity" className="form__select">
                        <option value="all">All Activities</option>
                        <option value="Culture">Umrah</option>
                        <option value="Sport">Sport</option>
                        <option value="Extreme">Extreme</option>
                    </select>
                </div>

                <div className="form__input-wrapper form__input--date">
                    <label htmlFor="date" className="form__label">When</label>
                    <input type="text" className="form__input" id="date" placeholder="Choose a Date"/>
                </div>

                <div className="form__input-wrapper form__input--guests">
                    <label htmlFor="location" className="form__label">Guests</label>
                    <select name="" id="" className="form__select">
                        <option value="">1 guest</option>
                        <option value="">2 guest</option>
                        <option value="">3 guest</option>
                        <option value="">4 guests or more</option>
                    </select>
                </div>

                <button className="button button--search">
                    <img src={search} alt="Search"/>
                </button>
            </form>

        </div>
    </header>
     );
}
 
export default Header;