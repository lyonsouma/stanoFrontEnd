import { Container } from "react-bootstrap"
import "../css/AboutPage.css";

const AboutPage=()=>{
    return(
        <Container fluid>
            <div style={{marginTop:"100px"}} className="row">
               <div className="col-12 col-sm-12 col-md-5 col-xl-5 col-xxl-5 mb-3 ImgBackGround d-flex justify-content-center align-items-center">
                  <h1 className="AboutText1" style={{color:"black"}}>About</h1>
               </div>
               <div className="col-12 col-sm-12 col-md-7 col-xl-7 col-xxl-7">
                    <div className="row">
                       <h3 className="AboutText2">About</h3>
                    </div>
                    <p>
                    Stanley Njenga Real Estate is a trusted partner dedicated to helping clients find their dream homes or navigate property transactions seamlessly. Recognizing the significance of real estate decisions, the company emphasizes a commitment to exceptional service and personalized attention. With Stanley Njenga's extensive experience in the industry, the team caters to diverse clients, including first-time homebuyers, investors, and sellers, ensuring that individual needs are met.</p>

                    <p>
                    The company's website serves as a comprehensive resource for all things real estate, offering features such as property listings, virtual tours, market trend insights, and mortgage calculators. Stanley Njenga Real Estate aims to empower clients with the information necessary for informed decision-making, ensuring a user-friendly interface for easy property exploration. Open communication and transparency are prioritized, with the team guiding clients through every step of the real estate process, from initial consultation to closing the deal.</p>

                    <p>
                    Stanley Njenga Real Estate takes pride in its robust network and strong relationships with industry professionals, including lenders, inspectors, and attorneys. This network enables the company to provide a wide range of services, ensuring a smooth transaction from start to finish. Whether clients are in search of a suburban home, a luxurious penthouse, or a commercial property, Stanley Njenga Real Estate is equipped with the expertise and resources to transform real estate dreams into reality, inviting potential clients to initiate their property journey by contacting the team today.</p>
              </div>
            </div>
        </Container>
    )
}
export default AboutPage;