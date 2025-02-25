import "../styles/main.css";
import AlUla from "../components/popular dest/img/Al Ula.jpg";
import Makkah from "../components/popular dest/img/makkah.jpg";
import Medina from "../components/popular dest/img/Medina.jpg";
import Riyadh from "../components/popular dest/img/Riyadh.jpeg";
import Jeddah from "../components/popular dest/img/Jeddah.jpg";
import Desert from "../components/popular dest/img/Desert.jpg";
import Arrow from "../img/icons/arrow-more.svg";
import Nav from "../components/nav/nav";
import "../styles/media.css";


const Destination = () => {
    return ( 
        <>
        <Nav/>
        <section className="section">
        <div className="container">
                <div className="section__header">
                    <h2 className="title-1">Popular Destinations</h2>
                    <a href="https://www.tripadvisor.com/Attractions-g293991-Activities-Saudi_Arabia.html" className="button-more">
                        View all
                        <img src={Arrow} alt="Arrow"/>
                    </a>
                </div>
                <div className="section__cards section__cards--popular">

                    <article className="card">
                        <a href="https://www.google.com/maps?sca_esv=d4edb64137185dc1&output=search&q=Al+Ula&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBv10Kbgy3ptSBM6mMfaz8zDVX4b2W1tiDkb3uUgOX2bJR15_aBP5My9bscopum8Oq71A479z8OTO1mzEU1aIg8rtGtUUYU3EtY-3XnFuZlQkFRHYtuLnbH6F5z1QL9LoPi8MkfiOLmpavqYgzQNT0SsK2w4gBRwPpqZ6PH1pigKR3gpUkw&entry=mc&ved=1t:200715&ictx=111" className="card__link"></a>
                        <img className="card__img" src={AlUla} alt="Img"/>
                        <h3 className="card__title">Al-Ula</h3>
                        <a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location">Saudi Arabia</a>
                    </article>

                    <article className="card">
                        <a href="https://www.google.com/maps/place/Makkah/@21.4359348,39.6817358,11z/data=!3m1!4b1!4m6!3m5!1s0x15c21b4ced818775:0x98ab2469cf70c9ce!8m2!3d21.4240968!4d39.8173364!16zL20vMDU4d3A?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__link"></a>
                        <img className="card__img" src={Makkah} alt="Img"/>
                        <h3 className="card__title">Makkah</h3>
                        <a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location">Saudi Arabia</a>
                    </article>

                    <article className="card">
                        <a href="https://www.google.com/maps/place/Madinah/@24.470983,39.4527471,11z/data=!3m1!4b1!4m6!3m5!1s0x15bdbe5197d220d5:0x2e54514fea3b08d9!8m2!3d24.4672132!4d39.6024496!16zL20vMDk0dmY?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__link"></a>
                        <img className="card__img" src={Medina} alt="Img"/>
                        <h3 className="card__title">Medina</h3>
                        <a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location">Saudi Arabia</a>
                    </article>

                    <article className="card">
                        <a href="https://www.google.com/maps/place/Riyadh/@24.7248316,46.4928766,10z/data=!3m1!4b1!4m6!3m5!1s0x3e2f03890d489399:0xba974d1c98e79fd5!8m2!3d24.7135517!4d46.6752957!16zL20vMGRsbV8?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__link"></a>
                        <img className="card__img" src={Riyadh} alt="Img"/>
                        <h3 className="card__title">Riyadh</h3>
                        <a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location">Saudi Arabia</a>
                    </article>

                    <article className="card">
                        <a href="https://www.google.com/maps/place/Jeddah/@21.4498002,38.8814953,10z/data=!3m1!4b1!4m6!3m5!1s0x15c3d01fb1137e59:0xe059579737b118db!8m2!3d21.5291545!4d39.1610863!16zL20vMDFwazhi?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__link"></a>
                        <img className="card__img" src={Jeddah} alt="Img"/>
                        <h3 className="card__title">Jeddah</h3>
                        <a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location">Saudi Arabia</a>
                    </article>

                    <article className="card">
                        <a href="https://www.google.com/maps/place/Jeddah+Desert+Camp/@21.4491546,38.8814921,10z/data=!4m10!1m2!2m1!1sdesert!3m6!1s0x15c23741b43f517f:0x89bbd0792f10f78f!8m2!3d21.3465733!4d39.4745106!15sCgZkZXNlcnSSAQRjYW1w4AEA!16s%2Fg%2F11h2j8sd_1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__link"></a>
                        <img className="card__img" src={Desert} alt="Img"/>
                        <h3 className="card__title">Desert</h3>
                        <a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location">Saudi Arabia</a>
                    </article>
                </div>
            </div>
    </section>
    </>
     );
}
 
export default Destination;