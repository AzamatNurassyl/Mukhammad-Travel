import "../styles/main.css";
import "../styles/media.css";
import Header from "../components/header/header";
import Popular from "../components/popular dest/popularDest";
import Hotels from "../components/hotels/hotels";
import Activities from "../components/activities/activities";



const Home = () => {
    return ( 
        <>
        <Header/>
        <Popular/>
        <Hotels/>
        <Activities/>
        </>
     );
}
 
export default Home;