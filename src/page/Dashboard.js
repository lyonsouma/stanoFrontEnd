import { Container, NavLink, Navbar} from "react-bootstrap"
import CompanyLogo from "../Img/homes2__1_-removebg-preview.png";
import '../css/NavBar.css';
import '../css/Dashboard.css';
import NavigationFullscreen from "../Components/NavigationDower";
import { Link, Outlet } from "react-router-dom";
import { Avatar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import burgerMenu from '../Img/burgerMenu2.png';
import { deepPurple, green } from "@mui/material/colors";
import PersonIcon from '@mui/icons-material/Person';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import SimpleBar from "simplebar-react";

const Dashboard=()=>{
    const[openDrawer,setOpenDrawer]=useState(false);
    return(
        <Container fluid>
            <div style={{height:"100vh"}} className="row">
                <div className="col-12 navigationSmallScreen">
                    <Navbar fixed="top" bg="dark" style={{backgroundColor:"#252526"}}>
                        <Container fluid>
                            <Navbar.Brand href="#home"><img src={CompanyLogo} alt="img"></img></Navbar.Brand>
                                <div  className="d-flex justify-content-between align-items-between NavLINKS">
                                    <div className="NavBAR">
                                        <img onClick={()=>{setOpenDrawer(!openDrawer)}} src={burgerMenu} alt="img"></img>
                                    </div>
                                </div>
                        </Container>
                    </Navbar>
                </div>
                <div style={{backgroundColor:"#212529"}} className="col-2 navigationFullScreen">
                    <NavigationFullscreen/>         
                </div>
                 <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                    <div className="row">
                        <SimpleBar style={{height:"100vh",overflowX:"hidden"}}>
                            <Outlet/>
                        </SimpleBar>
                    </div>
                 </div>
            </div>
            <Drawer
             anchor={"right"}
             open={openDrawer}
             onClose={()=>{setOpenDrawer(!openDrawer)}}
             xs={{bgcolor: green[500]}}
            >
                <List>
                     <span className="col-12">
                            <h5 style={{color:"black",fontWeight:"500"}}>Admin</h5>

                            <ListItem>
                            <Link style={{textDecoration:"none",color:"white"}} to="Users">
                                    <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                        <ListItemIcon>
                                            <PersonIcon sx={{ fontSize: 35 }}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color:"black"}} primary={"Users"}/>
                                    </ListItemButton>
                            </Link>
                            </ListItem>

                            <ListItem>
                            <Link to="AllProperties">
                                <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                        <ListItemIcon>
                                            <LocationCityIcon sx={{ fontSize: 35 }}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color:"black"}} primary={"Properties"}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                     </span>

                      <h5 style={{color:"black",fontWeight:"500"}}>Seller</h5>
                        <ListItem>
                            <Link to="SellersProperties">
                                <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                    <ListItemIcon>
                                        <LocationCityIcon sx={{ fontSize: 35 }}/>
                                    </ListItemIcon>
                                    <ListItemText style={{color:"black"}} primary={"Properties"}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link to="AddProperties">
                                <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                    <ListItemIcon>
                                        <AddCircleOutlineIcon sx={{ fontSize: 35 }}/>
                                    </ListItemIcon>
                                    <ListItemText style={{color:"black"}} primary={" Add Property"}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link to="SoldProperties">
                                <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                    <ListItemIcon>
                                        <MonetizationOnIcon sx={{ fontSize: 35 }}/>
                                    </ListItemIcon>
                                    <ListItemText style={{color:"black"}} primary={" Sold Properties"}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link to="PropertiesRequest">
                                <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                    <ListItemIcon>
                                        <RequestPageIcon sx={{ fontSize: 35 }}/>
                                    </ListItemIcon>
                                    <ListItemText style={{color:"black"}} primary={" Property request"}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>

                    <ListItem  style={{borderBottom:"1px solid gray"}}>
                        <Link style={{color:"white",textDecoration:"none"}} to="AvatarSettingsPage">
                            <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                  <NavLink className="linkItems col-11">
                                     <span> <Avatar sx={{ bgcolor: deepPurple[500],width: 56, height: 56}} >OP</Avatar></span>
                                   </NavLink>  
                            </ListItemButton>
                        </Link>
                    </ListItem>
              </List>    
            </Drawer>
        </Container>
    )
}
export default Dashboard;