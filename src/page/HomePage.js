import { Button, Card, CardActions, CardContent, CardMedia, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import video from '../Video/Homes For Sale in Salt Lake City, Utah.mp4'
import { Nav } from "react-bootstrap";
import IMAGES from '../Img/3d-view-house-model_23-2150761178.jpg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SnackTost } from "../useContext/UseContext";

const HomePage=()=>{
    const{handleShow3}=useContext(SnackTost)
    return(
        <>
            <div className="row">
                <div style={{margin:"0px",padding:"0px"}} className="background-video position-relative">
                    <video style={{margin:"0px",padding:"0px"}} autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-6 text-content position-absolute top-50 start-50 translate-middle text-white">
                        <div className="row">
                        <h1>New Homes Estate Search</h1>
                           <div className="col-12">
                                 <div className="ml-3">
                                    <Nav>
                                        <span style={{backgroundColor:"white",color:"black",cursor:"pointer"}} className="searchLinks">Home</span>    
                                        <span style={{cursor:"pointer"}} onClick={handleShow3} className="searchLinks">Filter homes</span>  
                                        <span style={{cursor:"pointer"}} className="searchLinks">About</span>  
                                    </Nav>
                                </div>
                                <FormControl className="searchFilled" fullWidth variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Search field</InputLabel>
                                        <FilledInput
                                            placeholder="Make a search based on location"
                                            style={{backgroundColor:"white",borderRadius:"none"}}
                                            endAdornment={
                                            <InputAdornment className="p-0" position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                edge="end"
                                                >
                                                <SearchIcon style={{color:"#EE9A2A"}}/>
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        />
                                </FormControl>
                           </div>
                        </div>
                    </div>
                </div>
           </div>
           <div className="row">
                <div className="row d-flex justify-content-center align-items-center mt-4">
                    <h2 style={{textAlign:"center"}}>Available Properties</h2>
                </div>
                  <div className="col-12 mt-3 mb-3">
                    <div className="row d-flex justify-content-center align-items-center">
                        <Card className="m-3" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={IMAGES}
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link className="col-12" to={"/ViewProperties"}>
                                       <Button className="col-12" style={{backgroundColor:"#212529",color:"white"}} size="small">view Property</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        <Card className="m-3" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={IMAGES}
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                     <Button className="col-12" style={{backgroundColor:"#212529",color:"white"}} size="small">view Property</Button>
                                </CardActions>
                            </Card>
                        <Card className="m-3" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={IMAGES}
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                     <Button className="col-12" style={{backgroundColor:"#212529",color:"white"}} size="small">view Property</Button>
                                </CardActions>
                            </Card>
                        <Card className="m-3" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={IMAGES}
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                      <Button className="col-12" style={{backgroundColor:"#212529",color:"white"}} size="small">view Property</Button>
                                </CardActions>
                            </Card>
                        <Card className="m-3" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={IMAGES}
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className="col-12" style={{backgroundColor:"#212529",color:"white"}} size="small">view Property</Button>
                                </CardActions>
                            </Card>
                        <Card className="m-3" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={IMAGES}
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                     <Button className="col-12" style={{backgroundColor:"#212529",color:"white"}} size="small">view Property</Button>
                                </CardActions>
                            </Card>
                        <Card className="m-3" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={IMAGES}
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                     <Button className="col-12" style={{backgroundColor:"#212529",color:"white"}} size="small">view Property</Button>
                                </CardActions>
                            </Card>
                    </div>
                </div>
           </div>
        </>
    )
}
export default HomePage;