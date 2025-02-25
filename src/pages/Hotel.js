import "../styles/main.css";
import Arrow from "../img/icons/arrow-more.svg";
import "../styles/media.css";
import Nav from "../components/nav/nav";

import Medina from "../components/hotels/img/01.jpg";
import Makkah from "../components/hotels/img/Makkah.jpg";
import Riyadh from "../components/hotels/img/Riyadh.jpg";
import AlUla from "../components/hotels/img/AlUla.jpg";

import star from "../img/icons/star.svg";
import starLine from "../img/icons/star-line.svg";



const Hotel = () => {
	
    return ( 
		<>
		 <Nav/>
        <section className="section">
			<div className="container">
				<div className="section__header">
					<h2 className="title-1">Hotels in Saudi Arabia</h2>
					<a href="https://www.booking.com/searchresults.ru.html?ss=%D0%9C%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0%2C+%D0%A1%D0%B0%D1%83%D0%B4%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%90%D1%80%D0%B0%D0%B2%D0%B8%D1%8F&ssne=%D0%9C%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0&ssne_untouched=%D0%9C%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0&efdco=1&label=medina-JVPLowQNFTy5K29CJHMxHAS541258791731%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-387120226311%3Alp1028873%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=7a5cfd8453212ce7e6e6346f54924143&aid=1610684&lang=ru&sb=1&src_elem=sb&src=searchresults&dest_id=-3092186&dest_type=city&group_adults=2&no_rooms=1&group_children=0" className="button-more">
						View all
						<img src={Arrow} alt="Arrow"/>
					</a>
				</div>
				<div className="section__cards section__cards--4-in-row">
					<article className="card">
						<a href="https://www.booking.com/hotel/sa/millennium-al-aqeeq-madinah-hotel.ru.html?aid=1610684&label=medina-JVPLowQNFTy5K29CJHMxHAS541258791731%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-387120226311%3Alp1028873%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=7a5cfd8453212ce7e6e6346f54924143&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=distance_from_search&srepoch=1739092017&srpvid=c47b4013e3600260&type=total&ucfs=1&" className="card__link"></a>
						<img className="card__img card__img--hotel" src={Medina} alt="Img"/>
						<h3 className="card__title card__title--hotel">Millennium Al Aqeeq Hotel</h3>

						<footer className="card__footer">
							<a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location card__location--icon">Saudi Arabia</a>
							<div className="card__rating">
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={starLine} alt=""/>
							</div>
						</footer>
					</article>

					<article className="card">
						<a href="https://www.booking.com/hotel/sa/mntj-shdn.ru.html?aid=1610684&label=medina-JVPLowQNFTy5K29CJHMxHAS541258791731%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-387120226311%3Alp1028873%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=7a5cfd8453212ce7e6e6346f54924143&dest_id=2376714&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1739092076&srpvid=1a9f4033268c01a4&type=total&ucfs=1&" className="card__link"></a>
						<img className="card__img card__img--hotel" src={AlUla} alt="Img"/>
						<h3 className="card__title card__title--hotel">Shaden Resort</h3>

						<footer className="card__footer">
							<a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location card__location--icon">Saudi Arabia</a>
							<div className="card__rating">
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={starLine} alt=""/>
							</div>
						</footer>
					</article>

					<article className="card">
						<a href="https://www.booking.com/hotel/sa/makkah-clock-royal-tower-a-fairmont.ru.html?aid=1610684&label=medina-JVPLowQNFTy5K29CJHMxHAS541258791731%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-387120226311%3Alp1028873%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=7a5cfd8453212ce7e6e6346f54924143&dest_id=269009&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1739092126&srpvid=725b4046f3320402&type=total&ucfs=1&" className="card__link"></a>
						<img className="card__img card__img--hotel" src={Makkah} alt="Img"/>
						<h3 className="card__title card__title--hotel">Makkah Hotel</h3>

						<footer className="card__footer">
							<a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location card__location--icon">Saudi Arabia</a>
							<div className="card__rating">
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
							</div>
						</footer>
					</article>

					<article className="card">
						<a href="https://www.booking.com/hotel/sa/four-season-riyadh.ru.html?aid=1610684&label=medina-JVPLowQNFTy5K29CJHMxHAS541258791731%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-387120226311%3Alp1028873%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=7a5cfd8453212ce7e6e6346f54924143&dest_id=418602&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1739092159&srpvid=252c405d91e700c0&type=total&ucfs=1&" className="card__link"></a>
						<img className="card__img card__img--hotel" src={Riyadh} alt="Img"/>
						<h3 className="card__title card__title--hotel">Four Seasons Hotel Riyadh</h3>

						<footer className="card__footer">
							<a href="https://www.google.com/maps/place/Saudi+Arabia/@22.6930914,23.4316767,4z/data=!3m1!4b1!4m6!3m5!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162!16zL20vMDF6MjE1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="card__location card__location--icon">Saudi Arabia</a>
							<div className="card__rating">
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
								<img src={star} alt=""/>
							</div>
						</footer>
					</article>
				</div>
			</div>
		</section>
		</>
     );
}
 
export default Hotel;