import { Container, Nav} from "react-bootstrap";
import CompanyLogo from "../Img/New_homes__1_-removebg-preview.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterBar=()=>{
    return(
        <Container fluid>
           <div style={{backgroundColor:"#555555"}} className="row">
               <div className="col-12">
                  <div className="row">
                      <div style={{borderRight:"1px solid black",borderBottom:"1px solid black"}} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <img src={CompanyLogo} alt="img"></img>
                      </div>
                      <div style={{borderRight:"1px solid black",borderBottom:"1px solid black"}} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-light mt-2 ">
                        <p>New Homes Real Estate</p> 
                        <p>10610 ke Nairobi westlands, Suite 100</p> 
                        <p>South Jordan, Utah 84095</p> 
                        <p> +254 70492 2743</p> 
                        <p> © All Rights Reserved - Powerd by Stanley Njenga.</p>   
                      </div>
                      <div style={{borderRight:"1px solid black",borderBottom:"1px solid black"}} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-light mt-2 ">
                        <p><InstagramIcon style={{color:"white"}}/> @New_Homes_Real_Estate</p> 
                        <p><FacebookIcon style={{color:"white"}}/> @New_Homes_Real_Estate</p> 
                        <p><TwitterIcon style={{color:"white"}}/> @New_Homes_Real_Estate</p> 
                        <p><WhatsAppIcon style={{color:"white"}}/> +254 70492 2743</p> 
                        <p> © All Rights Reserved - Powerd by Stanley Njenga.</p>   
                      </div>
                  </div>
               </div>
           </div>
           <div style={{backgroundColor:"#1F1F1F"}} className="row">
                    <Container fluid>
                            <Nav>
                               <Nav.Link>
                                   <span style={{fontSize:"14px"}} className="text-light">Powerd by Stanley Njenga</span>
                               </Nav.Link>
                                <Nav.Link style={{color:"white",fontSize: 15}} href="#home">
                                   <span className="textFooter">Home</span>                                  
                                </Nav.Link>
                                <Nav.Link style={{color:"white",fontSize: 15}} href="#features">
                                  <span className="textFooter">Filter homes</span>                                   
                                </Nav.Link>
                                <Nav.Link style={{color:"white",fontSize: 15}} href="#pricing">
                                  <span className="textFooter">About</span>                                    
                                </Nav.Link>
                            </Nav>
                    </Container>
           </div>
        </Container>
    );
}
export default FooterBar;