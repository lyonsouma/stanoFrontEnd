import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField, styled } from "@mui/material"
import { Container, Form, FormControl, FormLabel } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";

const ViewProperties=()=>{
    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
  });
    // const [open1, setOpen1] = useState(false);

    // const handleClickOpen = () => {
    //   setOpen1(true);
    // };
  
    // const handleClose = () => {
    //   setOpen1(false);
    // };
    const saveChange=async()=>{
      try {
        const response=await axios.put()
        const message=response.data.message;
        const severity=response.data.severity;
            if(severity==='success'){
                // setOpen(!open);
                // setMessage(message);
                // setSeverity(severity);
                // history('/Dashboard/Products')
            }
            else{
                // setOpen(!open);
                // setMessage(message);
                // setSeverity(severity);
            }
      } catch (error) {
        // setOpen(!open);
        // setMessage(error.message);
        // setSeverity("error");
      }
    }
    return(
        <Container fluid>
        <div className="col-12 mt-3">
            <div className="row">
                <div className="col-12 mt-3">
                    <h3>View Product</h3>
                    <p>View Product created</p>
                </div>
            </div>
            <div className="row mb-3">
                <div style={{border:"1px solid #d4d4d4",borderRadius:"7px"}} className="col-12">
                      <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                                  {/* <img className="mt-4" src={`${}/Public/${}`} alt={`${}`} style={{ width: '250px', height: '250px' }} ></img> */}
                                </div>
                                <div className="d-flex align-items-center col-12 mt-3">
                                  <p>
                                      <h5>
                                      <span style={{fontSize:'15px'}}>PRODUCT NAME: </span>
                                           <span style={{color:"#092332"}}>{}</span>
                                      </h5>
                                      <h5>
                                      <span style={{fontSize:'15px'}}>CATEGORY NAME: </span>
                                           <span style={{color:"#092332"}}>{}</span>
                                      </h5>
                                      <h5>
                                      <span style={{fontSize:'15px'}}>Brand Name: </span>
                                           <span style={{color:"#092332"}}>{}</span>
                                      </h5>
                                      <h5>
                                      <span style={{fontSize:'15px'}}>SKU: </span>
                                           <span style={{color:"#092332"}}>{}</span>
                                      </h5>
                                      <span style={{fontSize:"13px"}}>
                                      {}
                                      </span>
                                  </p>
                                </div>
                          </div>
                       <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <Form>
                              <FormGroup className="mt-3">
                                  <TextField fullWidth id="outlined-basic" label="Product Name" variant="outlined" />
                              </FormGroup>
                              <FormGroup className="mt-3">
                                  <TextField fullWidth id="outlined-basic" label="Quantity" variant="outlined" />
                              </FormGroup>
                              <Form className="row mt-3">
                               <FormGroup>
                                 <TextField fullWidth id="outlined-multiline-static"
                                    onChange={(e)=>{}}
                                    label="Description"
                                    multiline
                                    rows={5}/>
                               </FormGroup>
                            </Form>
                          <div className="row flex-row mt-4 mb-3 ">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                              <Button className="col-3 m-1 p-1" style={{backgroundColor:"#55AEF0",color:"white"}}>Clear</Button>
                              <Button className="col-3 m-1" style={{backgroundColor:"#55AEF0",color:"white"}}>Contact seller</Button>
                            </div>
                          </div>
                        </Form> 
                       </div>
                  </div>
                </div>
            </div>
        </div>
      {/* <Dialog
        open={open1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete item from the table"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Do you what to delete this product from the table 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={
            async()=>{
                try{
                    const response=await axios.put(`${link}/Products/DeleteProduct`,{
                      SKUNumber:SKU
                    })
                    const message=response.data.message;
                    const severity=response.data.severity;
                    if(severity==="success"){
                        setOpen(!open);
                        setMessage(message)
                        setSeverity(severity);
                        handleClose()
                        history('/Dashboard/Products')
                    }
                }
                catch(error){
                    setOpen(!open);
                    setMessage(error.message)
                    setSeverity("error");
                }
            }
         } autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
    </Container>
    )
}
export default ViewProperties;