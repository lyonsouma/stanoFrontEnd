import { Container, Form,} from "react-bootstrap";
import { Button, FormControl, FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUpPage.css"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { SnackTost } from "../useContext/UseContext";

const SignUpPage=()=>{
    const{ServerLink,open,setOpen,setMessage,setSeverity}=useContext(SnackTost);
    const history=useNavigate();

    const[userName,setUserName]=useState('');
    const[userNameError,setUserNameError]=useState('');

    const[emailError,setEmailError]=useState();
    const[Email,setEmail]=useState();

    const[Contact,setContact]=useState();
    const[ContactError,setContactError]=useState();

    const [showPassword1, setShowPassword1] = useState(false);
    const[Password1,setPassword1]=useState('');

    const[passwordError1,setPasswordError1]=useState('');
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
      const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };

    const [showPassword2, setShowPassword2] = useState(false);
    const[Password2,setPassword2]=useState('');

    const[passwordError2,setPasswordError2]=useState('');
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
      const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };
    const submitForm= async()=>{
            if(!userName){
                setUserNameError("Provide a user Name in the form")
            }
            if(!Email){
                setEmailError("Provide an email in the form")
            }
            if(!Contact){
                setContactError("Provide a phone number in the form")
            }
            if(!Password1){
                setPasswordError1("Provide a Password in the form")
            }
            if(!Password2){
                setPasswordError2("Provide a Confirm Password in the form")
            }
            if(Password1!==Password2){
                setPasswordError1("The two passwords don't much");
                setPasswordError2("The two passwords don't much");
            }
         try {
            const response= await axios.post(`${ServerLink}/realstate/register`,{
                 userName:userName, 
                 email:Email, 
                 password:Password1,
                 contact:Contact, 
            });   
            console.log(response);
            if(response.status=== 200){
                setOpen(!open)
                setMessage(response.data.message)
                setSeverity("success")
                history('/');
            }
            else if(response.status=== 400){
                setOpen(!open)
                setMessage(response.data.message)
                setSeverity("error");
            }
            else if(response.status=== 401){
                setOpen(!open)
                setMessage(response.data.message)
                setSeverity("warning");
                console.log("hello")
            }
            else if(response.status=== 500){
                setOpen(!open)
                setMessage(response.data.message)
                setSeverity("error");
            }
        } catch (error) {
            console.log(error)
            setOpen(!open)
            setMessage(error.message)
            setSeverity("error");
        }
    }
    return(
        <Container fluid>
        <div style={{minHeight:"100vh"}} className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-3">   
               <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 d-flex justify-content-start align-items-start flex-column">
                        <h1>Welcome to New Homes Real Estate</h1>
                        <p>Get started-it's free. No credit card needed</p>
                    </div>
               </div>
               <div className="row d-flex justify-content-center align-items-center">
                 <Form className="col-9 col-sm-8 col-md-7 col-lg-6 col-xl-8 mt-4">
                        <FormGroup className="mt-1">
                            <TextField error={userName} helperText={userNameError? userNameError:"Enter UserName"} fullWidth id="outlined-basic" label="user Name" variant="outlined" value={userName} 
                            onChange={
                                (e)=>{
                                    setUserName(e.target.value);
                                }
                            }
                            onFocus={
                                ()=>{
                                    setUserNameError('');
                                }
                            }
                            />
                        </FormGroup>
                       
                        <FormGroup className="mt-1">
                            <TextField error={emailError} helperText={emailError? emailError:"Enter email"} fullWidth id="outlined-basic" label="Email" variant="outlined" value={Email} 
                            onChange={
                                (e)=>{
                                    setEmail(e.target.value);
                                }
                            }
                            onSelect={
                                ()=>{
                                    setEmailError('');
                                }
                            }
                            />
                        </FormGroup>
                       
                        <FormGroup className="mt-1">
                            <TextField error={ContactError} helperText={ContactError? ContactError:"Enter Phone number"} fullWidth id="outlined-basic" label="Phone number" variant="outlined" value={Contact} 
                            onChange={
                                (e)=>{
                                    setContact(e.target.value);
                                }
                            }
                            onSelect={
                                ()=>{
                                    setContactError('');
                                }
                            }
                            />
                        </FormGroup>

                        <FormControl
                            className="mt-1"   
                            fullWidth variant="outlined"
                            helperText={passwordError1? passwordError1:"password should have 8 characters"}                             
                        >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                              <OutlinedInput
                                    type={showPassword1 ? 'text' : 'password'}
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
                                       endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword1}
                                                    onMouseDown={handleMouseDownPassword1}
                                                    edge="end"
                                                    >
                                                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                                label="Password"
                                            />
                        </FormControl>
                           {passwordError1 && (
                                        <FormHelperText error>{passwordError1}</FormHelperText>
                                        )}
                           {!passwordError1 && (
                                        <FormHelperText>
                                            Password should have 8 characters
                                        </FormHelperText>
                           )}

                        <FormControl
                            className="mt-1"   
                            fullWidth variant="outlined"
                            helperText={passwordError2? passwordError2:"password should have 8 characters"}                             
                        >
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                              <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword2 ? 'text' : 'password'}
                                    error={passwordError2}
                                    value={Password2}
                                    onChange={
                                       (e)=>{
                                           setPassword2(e.target.value);
                                        }
                                    }
                                    onSelect={
                                         ()=>{
                                            setPasswordError2('');
                                       }
                                    }
                                       endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword2}
                                                    onMouseDown={handleMouseDownPassword2}
                                                    edge="end"
                                                    >
                                                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                                label="Password"
                                            />
                          </FormControl>
                           {passwordError2 && (
                                        <FormHelperText error>{passwordError2}</FormHelperText>
                                        )}
                           {!passwordError2 && (
                                        <FormHelperText>
                                            Password should have 8 characters
                                        </FormHelperText>
                           )}

                        <FormGroup className="mt-4 d-flex align-content-center">
                            <Button onClick={submitForm} style={{backgroundColor:"#092332",border:"none",color:"white"}} className="col-9" size="large">Continue</Button>
                        </FormGroup>
                    </Form>
                </div> 
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                      <p>Already have an account <span style={{color:"#2d8bba",cursor:"pointer"}}><b><Link to="/">Log in</Link></b></span></p>
                    </div>
                </div>
            </div>
            <div  className="sideIMG col-5 ">

            </div>
            
          </div>
      </Container>
    );
}
export default SignUpPage;