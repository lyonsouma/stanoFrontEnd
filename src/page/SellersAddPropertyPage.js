import { Container, Form, FormGroup } from "react-bootstrap";
import '../css/AddItems.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddItemComponent = () => {
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
    const history = useNavigate();
    const [propertyName, setProductName] = useState('');
    const [PropertyPrice, setProductQuantity] = useState('');
    const [Year, setYear] = useState('');
    const [Town, setTown] = useState('')
    const [County, setCounty] = useState('');
    const [PropertyType, setpropertyType] = useState('');
    const [description, setDescription] = useState();
    const [propertyImage, setPropertyImage] = useState(null);

    const [ProductNameError, setProductNameError] = useState();
    const [ProductQuantityError, setProductQuantityError] = useState();
    const [MinQuantityError, setMinQuantityError] = useState();
    const [DistributerIDError, setDistributerIDError] = useState();
    const [DescriptionError, setDescriptionError] = useState();
    const [houseTypes, setHouseTypes] = useState([]);


    const handleformSubmit = async () => {
        const formData = new FormData();
        formData.append('propertyName', propertyName);
        formData.append('PropertyPrice', PropertyPrice);
        formData.append('Year', Year);
        formData.append('Town', Town);
        formData.append('County', County);
        formData.append('PropertyType', PropertyType);
        formData.append('description', description);
        formData.append('propertyImage', propertyImage);

        try {

            const response = await axios.post('http://localhost:7000/realstate/addHouse', formData);

            const severity = response.data.severity;
            if (severity === 'success') {

            }
            else {

            }

        } catch (error) {
            console.log("ERROR", error);

        }

    }

    const clearForm = () => {
        setProductName('');
        setProductQuantity('');
        setYear('');
        setTown('');
        setCounty('');
        setpropertyType('');
        setDescription('');
        setPropertyImage(null);
        setProductNameError('');
        setProductQuantityError('');
        setMinQuantityError('');
        setDistributerIDError('');
        setDescriptionError('');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const houseTypesResponse = await axios.get('http://localhost:7000/realstate/getAllHouseTypes');
                setHouseTypes(houseTypesResponse.data);
            } catch (error) {
                console.error('Error fetching house types:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <h3>Add A Property</h3>
                        <p>Create new Property</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div style={{ border: "1px solid #d4d4d4", borderRadius: "7px" }} className="col-12">
                        <form onSubmit={handleformSubmit}>
                            <Form className="row mt-3">
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={() => { setProductNameError('') }} helperText={ProductNameError ? ProductNameError : "Enter Property Name"} error={ProductNameError} onChange={(e) => { setProductName(e.target.value) }} fullWidth id="outlined-basic" label="Property Name" variant="outlined" value={propertyName} />
                                </FormGroup>
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={() => { setProductQuantityError('') }} helperText={ProductQuantityError ? ProductQuantityError : "Enter Property price"} error={ProductQuantityError} onChange={(e) => { setProductQuantity(e.target.value) }} fullWidth id="outlined-basic" label="Property price" variant="outlined" value={PropertyPrice} />
                                </FormGroup>
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={() => { setProductQuantityError('') }} helperText={ProductQuantityError ? ProductQuantityError : "Enter Property Year"} error={ProductQuantityError} onChange={(e) => { setYear(e.target.value) }} fullWidth id="outlined-basic" label="Year" variant="outlined" value={Year} />
                                </FormGroup>
                            </Form>
                            <Form className="row mt-3">
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={() => { setMinQuantityError('') }} helperText={MinQuantityError ? MinQuantityError : "Enter Town"} error={MinQuantityError} onChange={(e) => { setTown(e.target.value) }} fullWidth id="outlined-basic" label="Town" variant="outlined" value={Town} />
                                </FormGroup>
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <TextField onFocus={() => { setMinQuantityError('') }} helperText={MinQuantityError ? MinQuantityError : "Enter County"} error={MinQuantityError} onChange={(e) => { setCounty(e.target.value) }} fullWidth id="outlined-basic" label="County" value={County} variant="outlined" />
                                </FormGroup>
                                <FormGroup className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-3">
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel id="demo-simple-select-label">Property type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={PropertyType}
                                            label="Property type"
                                            onChange={(e) => { setpropertyType(e.target.value) }}
                                            helperText={DistributerIDError ? DistributerIDError : "Enter Property type"}
                                            error={DistributerIDError}
                                            onFocus={() => { setDistributerIDError('') }}
                                        >
                                            {houseTypes.length > 0 ? (
                                                houseTypes.map(houseType => (
                                                    <MenuItem key={houseType.houseTypesId} value={houseType.houseTypeName}>
                                                        {houseType.houseTypeName}
                                                    </MenuItem>
                                                ))
                                            ) : (
                                                <MenuItem value="" disabled>
                                                    No Property type
                                                </MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </Form>
                            <Form className="row mt-3">
                                <FormGroup>
                                    <TextField helperText={DescriptionError ? DescriptionError : "Enter Description"} error={DescriptionError} fullWidth id="outlined-multiline-static"
                                        onChange={(e) => { setDescription(e.target.value) }}
                                        onFocus={() => { setDescriptionError('') }}
                                        label="Description"
                                        className="mt-3"
                                        multiline
                                        value={description}
                                        rows={5} />
                                </FormGroup>
                            </Form>
                            <Form className="row mt-3">
                                <div className="col-12">
                                    <Button style={{ height: "80px", backgroundColor: "white", color: "black", border: "1px solid #46b5ff" }} className="col-12" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                        Upload product image
                                        <VisuallyHiddenInput
                                            onChange={(e) => { setPropertyImage(e.target.files[0]) }}
                                            type="file"
                                            accept="image/*"
                                            name="propertyImage"
                                        />

                                    </Button>
                                    {propertyImage && <p>Selected file: {propertyImage.name}</p>}
                                </div>
                            </Form>

                            <div className="row mt-3 d-flex justify-content-center align-items-center">
                                <Button onClick={(e) => {

                                    if (!propertyName) {
                                        setProductNameError('Provide the Property Name');
                                    }
                                    if (!PropertyPrice) {
                                        setProductQuantityError('Provide the Property Price');
                                    }
                                    if (!Year) {
                                        setProductQuantityError('Provide the Property Year');
                                    }
                                    if (!Town) {
                                        setMinQuantityError('Provide the Town');
                                    }
                                    if (!County) {
                                        setMinQuantityError('Provide the County');
                                    }
                                    if (!PropertyType) {
                                        setDistributerIDError('Provide the Property Type');
                                    }
                                    if (!description) {
                                        setDescriptionError('Provide the Description');
                                    }
                                    else {
                                        handleformSubmit()
                                    }

                                }} style={{ backgroundColor: "#51ADE5", color: "black", border: "none" }} className="m-2 p-2 col-4 col-sm-4 col-lg-3 col-xl-3">Save</Button>

                                <Button onClick={() => { clearForm(); }} style={{ backgroundColor: "#51ADE5", color: "black", border: "none" }} className="m-2 p-2 col-4 col-sm-4 col-lg-3 col-xl-3">Clear</Button>
                            
                    </div>
                </form>
            </div>
        </div>
            </div >
        </Container >
    );
}
export default AddItemComponent;