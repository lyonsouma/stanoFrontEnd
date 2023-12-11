import {Container, Form, FormGroup } from "react-bootstrap";
import '../css/AddItems.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AddItemComponent=()=>{
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
    const history=useNavigate();
    const[getBrands, setGetBrands]=useState([]);
    const[getCategory, setCategory]=useState([]);
    const[ProductName,setProductName]=useState();
    const[BrandID,setBrandID]=useState();
    const[ProductQuantity,setProductQuantity]=useState();
    const[MinQuantity,setMinQuantity]=useState();
    const[CategoryID,setCategoryID]=useState();
    const[Description,setDescription]=useState();
    const[ProductImg,setProductImg]=useState();
    const[ProductNameError,setProductNameError]=useState();
    const[BrandIDError,setBrandIDError]=useState();
    const[ProductQuantityError,setProductQuantityError]=useState();
    const[MinQuantityError,setMinQuantityError]=useState();
    const[DistributerIDError,setDistributerIDError]=useState();
    const[DescriptionError,setDescriptionError]=useState();
    const SaveProducts=async()=>{
        try {
            const formData = new FormData();
            formData.append('file', ProductImg);  
            formData.append('BrandID',BrandID);
            formData.append('ProductName',ProductName);
            formData.append('Description',Description);
            formData.append('ProductQuantity',ProductQuantity);
            formData.append('MinQuantity',MinQuantity);
            formData.append('CategoryID',CategoryID);
            const response=await axios.post(``,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
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
    useEffect(()=>{
        const getParentCategory=async()=>{
            try {
              const CategoryResponse= await axios.get(``);     
              const BrandResponse= await axios.get(``);       

              setGetBrands(BrandResponse.data.Brands);
              setCategory(CategoryResponse.data.Categories);
            } catch (error) {
                // setOpen(!open);
                // setMessage(error.message);
                // setSeverity("error");
            }
        }
        getParentCategory();
    },[])
    return(
        <Container>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <h3>Add A Property</h3>
                        <p>Create new Property</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div style={{border:"1px solid #d4d4d4",borderRadius:"7px"}} className="col-12">
                            <Form className="row mt-3">
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={()=>{setProductNameError('')}} helperText={ProductNameError? ProductNameError:"Enter Property Name"} error={ProductNameError} onChange={(e)=>{setProductName(e.target.value)}} fullWidth id="outlined-basic" label="Property Name" variant="outlined" />                             
                                </FormGroup>                                 
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={()=>{setProductQuantityError('')}} helperText={ProductQuantityError? ProductQuantityError:"Enter Property price"} error={ProductQuantityError} onChange={(e)=>{setProductQuantity(e.target.value)}} fullWidth id="outlined-basic" label="Property price" variant="outlined" />
                                </FormGroup>                                
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={()=>{setProductQuantityError('')}} helperText={ProductQuantityError? ProductQuantityError:"Enter Property Year"} error={ProductQuantityError} onChange={(e)=>{setProductQuantity(e.target.value)}} fullWidth id="outlined-basic" label="Year" variant="outlined" />
                                </FormGroup>                                
                            </Form>
                            <Form className="row mt-3">
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={()=>{setMinQuantityError('')}} helperText={MinQuantityError? MinQuantityError:"Enter Town"} error={MinQuantityError} onChange={(e)=>{setMinQuantity(e.target.value)}} fullWidth id="outlined-basic" label="Town" variant="outlined" />
                                </FormGroup>                               
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={()=>{setMinQuantityError('')}} helperText={MinQuantityError? MinQuantityError:"Enter County"} error={MinQuantityError} onChange={(e)=>{setMinQuantity(e.target.value)}} fullWidth id="outlined-basic" label="County" variant="outlined" />
                                </FormGroup>                               
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                  <FormControl variant="outlined" fullWidth>
                                      <InputLabel id="demo-simple-select-label">Property type</InputLabel>
                                      <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={CategoryID}
                                            label="Property type"
                                            onChange={(e)=>{setCategoryID(e.target.value)}}
                                            helperText={DistributerIDError? DistributerIDError:"Enter Property type"} 
                                            error={DistributerIDError}
                                            onFocus={()=>{setDistributerIDError('')}}
                                        >
                                            {getCategory.length>0?(
                                                getCategory.map(
                                                    category=>(
                                                        <MenuItem key={category.CategoryId} value={category.CategoryId}>
                                                          {category.CategoryName}
                                                        </MenuItem>
                                                    )
                                                )):(
                                                    <MenuItem value="" disabled>
                                                         No Property type
                                                    </MenuItem>
                                                )
                                            }
                                        </Select>
                                    </FormControl>
                                </FormGroup>                               
                            </Form>
                            <Form className="row mt-3">
                               <FormGroup>
                                 <TextField helperText={DescriptionError? DescriptionError:"Enter Description"} error={DescriptionError} fullWidth id="outlined-multiline-static"
                                    onChange={(e)=>{setDescription(e.target.value)}}
                                    onFocus={()=>{setDescriptionError('')}}
                                    label="Description"
                                    className="mt-3"
                                    multiline
                                    rows={5}/>
                               </FormGroup>
                            </Form>
                            <Form className="row mt-3">
                                <div className="col-12">
                                    <Button style={{height:"80px",backgroundColor:"white",color:"black",border:"1px solid #46b5ff"}} className="col-12" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                        Upload product image
                                        <VisuallyHiddenInput onChange={(e)=>{setProductImg(e.target.files[0])}} type="file" />
                                    </Button>
                                    {ProductImg && <p>Selected file: {ProductImg.name}</p>}
                                </div>
                            </Form>
                            <div className="row mt-3 d-flex justify-content-center align-items-center">
                                <Button onClick={()=>{
                                     if(!ProductName){
                                        setProductNameError('Provide the Product Name');
                                    }
                                    if(!BrandID){
                                        setBrandIDError('Provide the Brand');
                                    }
                                    if(!ProductQuantity){
                                        setProductQuantityError('Provide the Product Quantity');
                                    }
                                    if(!MinQuantity){
                                        setMinQuantityError('Provide the Min-Quantity');
                                    }
                                    if(!CategoryID){
                                        setDistributerIDError('Provide the Category');
                                    }
                                    if(!Description){
                                        setDescriptionError('Provide the Description');
                                    }
                                    else{
                                        SaveProducts();
                                    }
                                }} style={{backgroundColor:"#51ADE5",color:"black",border:"none"}} className="m-2 p-2 col-4 col-sm-4 col-lg-3 col-xl-3">Save</Button>
                                <Button onClick={()=>{history('/Dashboard/Suppliers')}} style={{backgroundColor:"#51ADE5",color:"black",border:"none"}} className="m-2 p-2 col-4 col-sm-4 col-lg-3 col-xl-3">Clear</Button>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default AddItemComponent;