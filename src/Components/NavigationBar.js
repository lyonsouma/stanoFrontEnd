import { Container, Form, Nav, NavLink, Navbar, Offcanvas } from "react-bootstrap";
import CompanyLogo from "../Img/homes2__1_-removebg-preview.png";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, IconButton, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, OutlinedInput, Radio, RadioGroup, Slider, TextField } from "@mui/material";
import { useContext, useRef, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShareIcon from '@mui/icons-material/Share';
import '../css/NavigationBar.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { SnackTost } from "../useContext/UseContext";
import CopyAllIcon from '@mui/icons-material/CopyAll';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import burgerMenu from '../Img/burgerMenu2.png';
import { green } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InfoIcon from '@mui/icons-material/Info';
import StorefrontIcon from '@mui/icons-material/Storefront';
import axios from "axios";

const NavigationBar=()=>{
    const{ show3,handleClose3, handleShow3}=useContext(SnackTost)
    const[openDrawer,setOpenDrawer]=useState(false);
    const[inviteLink]=useState("http://localhost:3000");

    
    const[Password1,setPassword1]=useState('');
    const[passwordError1,setPasswordError1]=useState('');

    const linkInputRef = useRef(null);
    const{ServerLink,open,setOpen,setMessage,setSeverity}=useContext(SnackTost);
    const handleCopyClick = async () => {
        if (linkInputRef.current) {
          try {
            await navigator.clipboard.writeText(inviteLink);
            setOpen(!open);
            setMessage('Copied default value to clipboard');
            setSeverity("success");
            console.log("Copied default value to clipboard");
          } catch (err) {
            console.error('Failed to copy default value to clipboard: ', err);
          }
        }
      };

    //**open signing dialog box */
    const [open1, setOpen1] = useState(false);
    const handleClickOpen = () => {
      setOpen1(true);
    };
    const handleClose = () => {
      setOpen1(false);
    };

    //**open Share link dialog box */
    const [open2, setOpen2] = useState(false);
    const handleClickOpen2 = () => {
      setOpen2(true);
    };
    const handleClose2 = () => {
      setOpen2(false);
    };
    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [selectedIndex, setSelectedIndex] =useState(1);
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    function valueText(value) {
        return `${value}KSH`;
      }

    const [sliderValue, setSliderValue] = useState([10, 30]);

    const handleChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    const generateYearMarks = () => {
        const startYear = 1980;
        const endYear = 2025;
        const step = 5; // You can adjust the step size as needed
      
        const marks = [];
        for (let year = startYear; year <= endYear; year += step) {
          marks.push({ value: year, label: `${year}` });
        }
      
        return marks;
      };
    const[Email,setEmail]=useState();
    const submitForm=async()=>{
        try {
            const response= await axios.post(`${ServerLink}/realstate/login`,{
                email:Email, 
                password:Password1,
           });
           console.log(response.data);
        } catch (error) {
            setOpen(!open);
            setMessage(error.message);
            setSeverity("error");
        }
    }
    return(
        <Container fluid>
               <Navbar fixed="top" bg="dark" style={{backgroundColor:"#252526"}}>
                    <Container fluid>
                        <Navbar.Brand href="#home"><img src={CompanyLogo} alt="img"></img></Navbar.Brand>
                            <div  className="d-flex justify-content-between align-items-between NavLINKS">
                                <div className="NavLINKS">
                                    <Nav>
                                        <NavLink style={{color:"white",fontSize: 20}}>
                                            <Link style={{textDecoration:"none",color:"white"}} to="">
                                            <span className="NavLinks">Home</span>
                                            </Link>                                  
                                        </NavLink>
                                        <NavLink style={{color:"white",fontSize: 20}}>
                                            <span onClick={handleShow3} className="NavLinks">Filter homes</span>                                                   
                                        </NavLink>
                                        <NavLink style={{color:"white",fontSize: 20}}>
                                            <Link style={{color:"white",textDecoration:"none"}} to="AboutPage">
                                                <span className="NavLinks">About</span>
                                            </Link>                                    
                                        </NavLink>
                                        <NavLink style={{color:"white",fontSize: 20}}>     
                                            <Link style={{color:"white",textDecoration:"none"}} to="/SignUp">
                                                <span className="NavLinks">Become a seller</span>
                                            </Link>
                                        </NavLink>

                                        <NavLink  href="#pricing" style={{color:"white"}}>
                                            <PersonIcon onClick={handleClickOpen} sx={{ fontSize: 30 }}/>
                                        </NavLink>

                                        <NavLink href="#pricing" style={{color:"white"}}>
                                            <LocalPhoneIcon   sx={{ fontSize: 30 }}/>
                                        </NavLink>

                                        <NavLink href="#pricing" style={{color:"white"}}>
                                            <ShareIcon onClick={handleClickOpen2}  sx={{ fontSize: 30 }}/>
                                        </NavLink>
                                    </Nav>
                                </div>
                                <div className="NavBAR">
                                    <img onClick={()=>{setOpenDrawer(!openDrawer)}} src={burgerMenu} alt="img"></img>
                                </div>
                            </div>
                    </Container>
                </Navbar>
                    <Dialog
                        open={open1}
                        onClose={handleClose}
                        aria-describedby="alert-dialog-description"
                        fullWidth={true}
                        maxWidth={"xs"}
                    >
                         <DialogActions>
                            <span style={{cursor:"pointer"}} onClick={handleClose}><CloseIcon/></span>
                        </DialogActions>
                            <DialogTitle className="d-flex justify-content-center" id="alert-dialog-title">
                              {"Sign In"}
                            </DialogTitle>
                        <DialogContent>
                            <DialogContentText className="d-flex justify-content-center" id="alert-dialog-description">
                                <Form>
                                  <p>
                                     To sign in and access your saved searches and favorite properties, just fill in your email and phone number below.
                                 </p>
                                   <FormGroup>
                                      <TextField
                                         label="Email"
                                         autoComplete="current-password"
                                         helperText={"Enter your Email"}
                                         value={Email}
                                         onChange={(e)=>{setEmail(e.target.value)}}
                                        />
                                   </FormGroup>
                                   <FormControl className="mt-3" fullWidth variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                            error={passwordError1}
                                            value={Password1}
                                            onChange={
                                            (e)=>{
                                                setPassword1(e.target.value);
                                                }
                                            }
                                            onSelect={
                                                ()=>{
                                                    setPasswordError1('');
                                               }
                                            }
                                        fullWidth={true}
                                        type={showPassword ? 'text' : 'password'}                                      
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                    <FormHelperText>Enter the password</FormHelperText>
                                    </FormControl>
                                        <div className='row'>
                                            <div className='col-12 d-flex align-items-end justify-content-end'>
                                                <span className='mt-1' style={{color:"#41B8D5",fontWeight:"600"}}><Link to='/PasswordReset'><u>Forgot password?</u></Link></span>
                                            </div>
                                        </div> 
                                    <FormGroup className="mt-2">
                                        <Button onClick={submitForm} style={{backgroundColor:"#212529",color:"white"}}>Login</Button>
                                    </FormGroup>
                                    <div className='row mt-4'>
                                        <div className='col-12 d-flex align-items-end justify-content-end'>
                                            <span style={{fontSize:"14px"}} className='mt-1'>Don’t Have An Account? We can fix that!<Link to='/PasswordReset'> Click here to sign up.</Link></span>
                                        </div>
                                    </div> 
                                </Form>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>


                    <Dialog
                        open={open2}
                        onClose={handleClose2}
                        aria-describedby="alert-dialog-description"
                        fullWidth={true}
                        maxWidth={"xs"}
                    >
                         <DialogActions>
                            <span style={{cursor:"pointer"}} onClick={handleClose2}><CloseIcon/></span>
                        </DialogActions>
                            <DialogTitle className="d-flex justify-content-center" id="alert-dialog-title">
                              {"Share this link with other's to invite"}
                            </DialogTitle>
                        <DialogContent>
                            <DialogContentText className="d-flex justify-content-center" id="alert-dialog-description">
                               <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Copy link</InputLabel>
                                    <FilledInput
                                        readOnly={true}
                                        defaultValue={"http://localhost:3000"}
                                        style={{backgroundColor:"white",borderRadius:"none"}}
                                        endAdornment={
                                        <InputAdornment className="p-0" position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={handleCopyClick}
                                            >
                                            <CopyAllIcon style={{color:"#EE9A2A"}}/>
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>

                    <Offcanvas style={{height:"450px",color:"white",backgroundColor:"#212529"}} show={show3} onHide={handleClose3} placement="top">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Filter properties</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Container fluid>
                                <div className="row d-flex align-items-center justify-content-center ">
                                   <div style={{border:"1px solid #d4d4d4",borderRadius:"7px"}} className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 col-xxl-5 m-1 ">
                                       <div className="row">
                                           <div style={{borderBottom:"solid 1px white"}} className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="row">
                                                  <h2>County</h2>
                                                </div>
                                                <div style={{height:"300px",overflowY:"scroll"}}>
                                                    <List component="nav" aria-label="main mailbox folders">
                                                        <ListItemButton
                                                        selected={selectedIndex === 0}
                                                        onClick={(event) => handleListItemClick(event, 0)}
                                                        >
                                                            <ListItemIcon>
                                                                <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                           <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 1}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 2}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationOnIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>
                                                    </List>
                                                </div>
                                           </div>
                                           <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="row">
                                                  <h2>Town</h2>
                                                </div>
                                                <div style={{height:"300px",overflowY:"scroll"}}>
                                                    <List component="nav" aria-label="main mailbox folders">
                                                        <ListItemButton
                                                        selected={selectedIndex === 0}
                                                        onClick={(event) => handleListItemClick(event, 0)}
                                                        >
                                                            <ListItemIcon>
                                                                <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                           <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 1}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 2}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>

                                                        <ListItemButton
                                                        selected={selectedIndex === 3}
                                                        onClick={(event) => handleListItemClick(event, 1)}
                                                        >
                                                            <ListItemIcon>
                                                                 <LocationCityIcon style={{color:"white"}}/>
                                                            </ListItemIcon>
                                                             <ListItemText primary="Nairobi" />
                                                        </ListItemButton>
                                                    </List>
                                                </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div style={{border:"1px solid #d4d4d4",borderRadius:"7px"}} className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 col-xxl-5 m-1">
                                   <div className="row">
                                      <h2>Property Details</h2>
                                    </div>
                                     <div style={{height:"300px"}}>
                                      <FormControl>
                                        <FormLabel style={{color:"white"}} id="demo-row-radio-buttons-group-label">Property Type</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                                <FormControlLabel value="Homes" control={<Radio style={{color:"white"}}/>} label="Homes" />
                                                <FormControlLabel value="Office Space" control={<Radio style={{color:"white"}}/>} label="Office Space" />
                                                <FormControlLabel value="Land" control={<Radio style={{color:"white"}}/>} label="Land" />
                                                <FormControlLabel value="Town house" control={<Radio style={{color:"white"}}/>} label="Town house" />
                                        </RadioGroup>
                                      </FormControl>
                                      <div className="row mt-3">
                                        <p>Property Price range</p>
                                        <Container>
                                            <div className="col-12 p-2">
                                               <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                            </div>
                                        </Container>
                                      </div>
                                      <div className="row mt-1 mb-3">
                                        <p>Property year build</p>
                                        <Container>
                                            <div className="col-12 p-2 mb-2 ">
                                                <Slider
                                                        defaultValue={2023}
                                                        step={1}
                                                        marks={generateYearMarks() }
                                                        min={1980}
                                                        max={2025} 
                                                        valueLabelDisplay="auto"
                                                        aria-label="Year Slider"
                                                    />
                                            </div>
                                        </Container>
                                      </div>
                                     </div>
                                   </div>
                                    <div className="row mt-3 d-flex align-items-center justify-content-center">
                                        <Button className="col-3" style={{backgroundColor:"#55AEF0",color:"white"}}>Filter</Button>
                                    </div>
                                </div>
                            </Container>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Drawer
             anchor={"right"}
             open={openDrawer}
             onClose={()=>{setOpenDrawer(!openDrawer)}}
             xs={{bgcolor: green[500]}}
            >
              <List>
                <ListItem>
                </ListItem>
                    <ListItem>
                      <Link style={{textDecoration:"none",color:"white"}} to="">
                            <ListItemButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                <ListItemIcon>
                                  <HomeIcon sx={{ fontSize: 35 }}/>
                                </ListItemIcon>
                                <ListItemText style={{color:"black"}} primary={"Home"}/>
                            </ListItemButton>
                       </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemButton href="#services" onClick={()=>{
                            setOpenDrawer(!openDrawer);handleShow3()}}>
                            <ListItemIcon>
                                <FilterAltIcon sx={{ fontSize: 35 }}/>
                            </ListItemIcon>
                            <ListItemText style={{color:"black"}} primary={"Filter homes"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton href="#about" onClick={()=>{setOpenDrawer(!openDrawer)}}>
                            <ListItemIcon>
                                <InfoIcon sx={{ fontSize: 35 }}/>
                            </ListItemIcon>
                            <ListItemText style={{color:"black"}} primary={"About"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem  style={{borderBottom:"1px solid gray"}}>
                        <Link style={{color:"white",textDecoration:"none"}} to="/SignUp">
                            <ListItemButton href="#contacts" onClick={()=>{setOpenDrawer(!openDrawer)}}>
                                <ListItemIcon>
                                    <StorefrontIcon sx={{fontSize:35}}/>
                                </ListItemIcon>
                                <ListItemText style={{color:"black"}} primary={"Become a seller"}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemButton  onClick={handleClickOpen}>
                            <ListItemIcon>
                                 <PersonIcon onClick={handleClickOpen} sx={{ fontSize: 30 }}/>
                            </ListItemIcon>
<                            ListItemText style={{color:"black"}} primary={"Login"}/>
                        </ListItemButton>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemButton  onClick={handleClickOpen}>
                            <ListItemIcon>
                                  <LocalPhoneIcon sx={{ fontSize: 30 }}/>
                            </ListItemIcon>
<                            ListItemText style={{color:"black"}} primary={"Contact us"}/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton  onClick={handleClickOpen2}>
                            <ListItemIcon>
                                 <ShareIcon sx={{ fontSize: 30 }}/>
                            </ListItemIcon>
                            <ListItemText style={{color:"black"}} primary={"Share"}/>
                        </ListItemButton>
                    </ListItem>
              </List>
                   </Drawer>
        </Container>
    );
}
export default NavigationBar;