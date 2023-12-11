import { Container} from "react-bootstrap";
import NavigationBar from "../Components/NavigationBar";
import FooterBar from "../Components/FooterBar";
import '../css/LandingPage.css';
import { Outlet } from "react-router-dom";



const LandingPage=()=>{
    return(
        <Container fluid>
           <div style={{margin:"0px",padding:"0px"}} className="row">
               <NavigationBar/>
           </div>
              <Outlet/>
           <div className="row">
               <FooterBar/>
           </div>
        </Container>
    );
}
export default LandingPage;