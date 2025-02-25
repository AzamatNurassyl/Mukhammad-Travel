import "../styles/main.css";
import Arrow from "../img/icons/arrow-more.svg";
import "../styles/media.css";
import Sailing from "../components/activities/img/01.jpg";
import Bike from "../components/activities/img/Desert.jpg";
import Umrah from "../components/activities/img/Umrah.jpg";
import AlUla from "../components/activities/img/AlUla.jpg";
import Nav from "../components/nav/nav";


    const Activities = () => {
    return ( 
        <>
        <Nav/>
        <section className="section">
        <div className="container">

            <header className="section__header">
                <h2 className="title-1">Activities</h2>
                <a href="https://www.tripadvisor.com/Attractions-g298551-Activities-Medina_Al_Madinah_Province.html" className="button-act">
                    View all
                    <img src={Arrow} alt="Arrow"/>
                </a>
            </header>

            <div className="section__cards section__cards--4-in-row">

                <article className="card">
                    <a href=" https://wa.me/+77776669591" className="card__link"></a>
                    <img className="card__img card__img--activities" src={Sailing} alt="Img"/>
                    <h3 className="card__title">Sailing</h3>
                </article>

                <article className="card">
                    <a href="https://wa.me/+77776669591" className="card__link"></a>
                    <img className="card__img card__img--activities" src={Bike} alt="Img"/>
                    <h3 className="card__title">Quad bike adventure</h3>
                </article>

                <article className="card">
                    <a href="https://wa.me/+77776669591" className="card__link"></a>
                    <img className="card__img card__img--activities" src={Umrah} alt="Img"/>
                    <h3 className="card__title">Umrah</h3>
                </article>

                <article className="card">
                    <a href="https://wa.me/+77776669591" className="card__link"></a>
                    <img className="card__img card__img--activities" src={AlUla} alt="Img"/>
                    <h3 className="card__title">AlULa</h3>
                </article>


            </div>
        </div>
    </section>
    </>
     );
}
 
export default Activities;
