import { Avatar, FormGroup, TextField } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Button, Container, Nav, NavLink, Offcanvas, Tab, Tabs} from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import CompanyLogo from "../Img/New homes.png";
import { useState } from "react";

const NavigationFullscreen=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return(
        <Container>
           <div className="row">
              <div className="col-12 m-0 p-0 ">
                    <div style={{borderBottom:"2px white solid"}} className="row ">
                      <img height={"160px"} src={CompanyLogo} alt="img"></img>
                    </div>
                            <div style={{borderBottom:"solid 1px white"}} className="row">
                                    <div className="col-12 mt-3">
                                        <h5 style={{color:"white",fontWeight:"500"}}>Admin</h5>
                                        <Nav>
                                                    <NavLink className="linkItems col-11 m-1">
                                                        <Link className="linkItems" style={{textDecoration:"none",color:"white"}} to="Users">
                                                                
                                                                <span> Users</span>
                                                        </Link>                                          
                                                    </NavLink>
                                                
                                                    <NavLink className="linkItems col-11 m-1">
                                                        <Link  style={{textDecoration:"none",color:"white"}} to="AllProperties">
                                                            
                                                            <span> Properties</span>
                                                        </Link>                                          
                                                    </NavLink>
                                        </Nav>
                                    </div>
                            </div>    

                            <div style={{borderTop:"solid 1px white"}} className="row">
                                    <div className="col-12 mt-3">
                                        <h5 style={{color:"white",fontWeight:"500"}}>Seller</h5>
                                        <Nav>
                                                    <NavLink className="linkItems col-11 m-1">
                                                        <Link style={{textDecoration:"none",color:"white"}} to="SellersProperties">
                                                                
                                                                <span> Properties</span>
                                                        </Link>                                          
                                                    </NavLink>
                                                
                                                    <NavLink className="linkItems col-11 m-1">
                                                        <Link  style={{textDecoration:"none",color:"white"}} to="AddProperties">
                                                            
                                                            <span> Add Property</span>
                                                        </Link>                                          
                                                    </NavLink>

                                                    <NavLink className="linkItems col-11 m-1">
                                                        <Link  style={{textDecoration:"none",color:"white"}} to="SoldProperties">
                                                            
                                                            <span> Sold Properties</span>
                                                        </Link>                                          
                                                    </NavLink>

                                                    <NavLink className="linkItems col-11 m-1">
                                                        <Link  style={{textDecoration:"none",color:"white"}} to="PropertiesRequest">
                                                            
                                                            <span> Property request</span>
                                                        </Link>                                          
                                                    </NavLink>
                                        </Nav>
                                    </div>
                                </div>  

                            <div style={{borderTop:"solid 1px white"}} className="row">
                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                        <Nav>
                                            <NavLink className="linkItems col-11">
                                                <Link to="AvatarSettingsPage">            
                                                    <span onClick={handleShow}> <Avatar sx={{ bgcolor: deepPurple[500],width: 56, height: 56}} >OP</Avatar></span>
                                                </Link>                                          
                                            </NavLink>                                                
                                        </Nav>
                                    </div>
                                </div>  
                     </div>     
                </div>   
        </Container>
    )
}
export default NavigationFullscreen;