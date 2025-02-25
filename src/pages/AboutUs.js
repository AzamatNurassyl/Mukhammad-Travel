import Nav from "./../components/nav/nav";
import "../styles/media.css";
const AboutUs = () => {
    return ( 
        <>
        <Nav/>
        <div className="header__content">
        <ul className="header__title">
            About Us
        </ul>
        <h1 className="header__text">
            The company has been successfully organizing Hajj, Umrah and holidays abroad since 2025.
            The work of our company leaves every client with a desire to contact us in subsequent times.
            Thanks to the successful work of our team, the company has won the trust and respect of many clients, 
            this can be seen in our reviews.
        </h1>
    </div>
    </>
     );
}
 
export default AboutUs;