import { Button, FormGroup, TextField } from "@mui/material";
import { useState } from "react";
import { Container, Form, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const AvatarSettingsPage=()=>{
    const[CurrentPassword,setCurrentPassword]=useState();
    const[NewPassword,setNewPassword]=useState();
    const[ConfirmNewPassword,setConfirmNewPassword]=useState();
    const[CurrentPasswordError,setCurrentPasswordError]=useState();
    const[NewPasswordError,setNewPasswordError]=useState();
    const[ConfirmNewPasswordError,setConfirmNewPasswordError]=useState();
    return(
        <Container fluid>
            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 mt-4 "
            >
                <Tab eventKey="home" title="Change Password">
                    <div className="row d-flex align-items-center justify-content-center">
                       <div className="col-12 col-lg-6 col-xl-6 col-md-9 col-sm-12 mt-5">
                           <h3 style={{fontWeight:"500"}}>Change password</h3>
                            <div className="row mb-2">
                                <Form>
                                     <div className="row d-flex justify-content-center align-items-center">
                                         <FormGroup className="row mt-3">
                                             <div className="col-12 col-md-12 col-xl-12 col-lg-12 col-sm-12 mt-2 ">
                                                  <TextField
                                                     onChange={(e)=>{setCurrentPassword(e.target.value)}}
                                                     fullWidth
                                                     id="outlined-basic"
                                                     label="Current Password"
                                                     variant="outlined"
                                                     value={CurrentPassword}
                                                     helperText={CurrentPasswordError? CurrentPasswordError:"Enter  Current Password"} 
                                                     error={CurrentPasswordError}
                                                     onFocus={()=>{setCurrentPasswordError('')}}
                                                   />
                                             </div>
                                         </FormGroup>
                                         <FormGroup className="row mt-3">
                                            <div className="col-12 col-md-12 col-xl-12 col-lg-12 col-sm-12 mt-2">
                                                <TextField
                                                      onChange={(e)=>{setNewPassword(e.target.value)}}
                                                      fullWidth
                                                      id="outlined-basic"
                                                      label="New Password"
                                                      variant="outlined"
                                                      value={NewPassword}
                                                      helperText={NewPasswordError? NewPasswordError:"Enter New Password"} 
                                                      error={NewPasswordError}
                                                      onFocus={()=>{setNewPasswordError('')}}
                                                  />
                                            </div>
                                         </FormGroup>
                                         <FormGroup className="row mt-3">
                                             <div className="col-12 col-md-12 col-xl-12 col-lg-12 col-sm-12 mt-2">
                                                 <TextField
                                                      onChange={(e)=>{setConfirmNewPassword(e.target.value)}}
                                                      fullWidth
                                                      id="outlined-basic"
                                                      label="Confirm New Password"
                                                      variant="outlined"
                                                      value={ConfirmNewPassword}
                                                      helperText={ConfirmNewPasswordError? ConfirmNewPasswordError:"Enter Confirm New Password"} 
                                                      error={ConfirmNewPasswordError}
                                                      onFocus={()=>{setConfirmNewPasswordError('')}}
                                                    />
                                               </div>
                                          </FormGroup>
                                     </div>
                                          <div className="row d-flex justify-content-end align-items-end mt-2">
                                               <div className="col-9 d-flex justify-content-end align-items-end">
                                                   forgot password? <Link to='/PasswordReset'><u><span style={{color:"blue"}}><u>Resent password via email</u></span></u></Link>
                                                </div>
                                         </div>
                                         <div className="row d-flex justify-content-center align-items-center mt-3">
                                                <Button style={{backgroundColor:"#212529",color:"#ffffff",border:"none"}} size="md" className="col-6 mt-3">Save</Button>
                                          </div>
                                </Form>                      
                            </div>
                       </div>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                <div className="row d-flex align-items-center justify-content-center">
                       <div className="col-12 col-lg-6 col-xl-6 col-md-9 col-sm-12 mt-5">
                           <h3 style={{fontWeight:"500"}}>Change password</h3>
                            <div className="row mb-2">
                                <Form>
                                     <div className="row d-flex justify-content-center align-items-center">
                                         <FormGroup className="row mt-3">
                                             <div className="col-12 col-md-12 col-xl-12 col-lg-12 col-sm-12 mt-2 ">
                                                  <TextField
                                                     onChange={(e)=>{setCurrentPassword(e.target.value)}}
                                                     fullWidth
                                                     id="outlined-basic"
                                                     label="Name"
                                                     variant="outlined"
                                                     value={CurrentPassword}
                                                     helperText={CurrentPasswordError? CurrentPasswordError:"Enter  Current Name"} 
                                                     error={CurrentPasswordError}
                                                     onFocus={()=>{setCurrentPasswordError('')}}
                                                   />
                                             </div>
                                         </FormGroup>
                                         <FormGroup className="row mt-3">
                                            <div className="col-12 col-md-12 col-xl-12 col-lg-12 col-sm-12 mt-2">
                                                <TextField
                                                      onChange={(e)=>{setNewPassword(e.target.value)}}
                                                      fullWidth
                                                      id="outlined-basic"
                                                      label="Email"
                                                      variant="outlined"
                                                      value={NewPassword}
                                                      helperText={NewPasswordError? NewPasswordError:"Enter New Email"} 
                                                      error={NewPasswordError}
                                                      onFocus={()=>{setNewPasswordError('')}}
                                                  />
                                            </div>
                                         </FormGroup>
                                     </div>
                                     <div className="row d-flex justify-content-center align-items-center mt-3">
                                         <Button style={{backgroundColor:"#212529",color:"#ffffff",border:"none"}} size="md" className="col-6 mt-3">Save</Button>
                                     </div>
                                </Form>                      
                            </div>
                       </div>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Delete Account">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-12 col-lg-6 col-xl-6 col-md-9 col-sm-12 mt-5">
                            This is a notification to inform you that your account is scheduled for deletion. Please be advised that this action is irreversible, and all data associated with your account will be permanently removed. If you wish to retain any important information, we recommend backing up your data before the specified deletion date. If you have any questions or concerns regarding this process, do not hesitate to reach out to our support team. Thank you for your understanding.
                            <div className="row d-flex justify-content-center align-items-center mt-3">
                                 <Button  style={{color:"#ffffff",border:"none"}} size="md" className="col-6 mt-3 bg-danger ">Delete</Button>
                             </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}
export default AvatarSettingsPage;