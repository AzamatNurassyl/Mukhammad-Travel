import Nav from "../components/nav/nav";
import "./contacts.css";
import "../styles/media.css";
const Contacts = () => {
    return ( 
        <>
        <Nav/>
        <main className="section">
					<div className="container container--about">
						<h1 className="title--1">Contacts</h1>
						<ul className="content-list">
							<li className="content-list__item">
								<h2 className="title-2">Location</h2>
								<p> <a className="location__text" href="https://www.google.com/maps/place/Almaty,+Kazakhstan/@43.2178314,76.6228743,10z/data=!3m1!4b1!4m6!3m5!1s0x38836e7d16c5cbab:0x3d44668fad986d76!8m2!3d43.2379761!4d76.8828618!16zL20vMDE1MXMx?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" >Kazakhstan, Almaty</a></p>
							</li>
							<li className="content-list__item">
								<h3 className="title-2">Telegram / WhatsApp</h3>
								<p><a className="title__number" href="tel:+77776669591">+7 (777) 666-95-91</a></p>
							</li>
							<li className="content-list__item">
								<h4 className="title-2">Email</h4>
								<p><a className="title__email" href="https://mail.google.com/mail/u/0/#inbox">azamatnurassyl@gmail.com</a></p>
							</li>
						</ul>
					   
					</div>
				</main>
        </>	
     );
}
 
export default Contacts;