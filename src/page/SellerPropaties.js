import React, { useEffect, useState } from "react";
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Modal, Container, Row, Col } from "react-bootstrap";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';
import { Button, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';


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

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [PropertyName, setPropertyName] = useState('');
    const [PropertyPrice, setPropertyPrice] = useState('');
    const [image, setImage] = useState('');
    const [Town, setTown] = useState('');
    const [County, setCounty] = useState('');
    const [PropertyType, setPropertyType] = useState('');
    const [Description, setDescription] = useState('');
    const [Year, setYear] = useState('');
    const [houseTypes, setHouseTypes] = useState([]);


    const showPropertyDetails = (property) => {
        setSelectedProperty(property);
        setPropertyName(property?.PropertyName || '');
        setPropertyPrice(property?.Propertyprice || '');
        setImage(property?.image || '');
        setTown(property?.Town || '');
        setCounty(property?.County || '');
        setPropertyType(property?.PropertyType || '');
        setDescription(property?.description || '');
        setYear(property?.Year || '');

    };

    const hidePropertyDetails = () => {
        setSelectedProperty(null);
        setPropertyName('');
        setPropertyPrice('');
        setImage('');
        setTown('');
        setCounty('');
        setPropertyType('');
        setDescription('');
        setYear('');
    };

    useEffect(() => {
        const getProperties = async () => {
            try {
                const response = await axios.get('http://localhost:7000/realstate/getAllHouses');
                const data = response.data.map((property, index) => ({
                    ...property,
                    id: index + 1, 
                    image: property.image.replace('./Image/', ''),
                }));
                setProperties(data);
            } catch (error) {
                console.log(error);
            }
        };
    
        getProperties();
    }, []);

    const editProperty = async () => {
        try {
            const editedProperty = await axios.patch(`http://localhost:7000/realstate/editHouse/${selectedProperty.houseId}`, {
                propertyName: PropertyName,
                PropertyPrice,
                Year,
                Town,
                County,
                PropertyType,
                description: Description,
            });

            console.log(editedProperty.data);

            hidePropertyDetails();

        } catch (error) {
            console.error('Error editing property:', error);

        }
    };

    const deleteProperty = async (houseId) => {
        try {
            const response = await axios.delete(`http://localhost:7000/realstate/deleteHouse/${houseId}`);
            console.log(response.data);

            const updatedProperties = properties.filter(property => property.houseId !== houseId);
            setProperties(updatedProperties);
        } catch (error) {
            console.error('Error deleting property:', error);
        }
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

    const columns = [
        { field: 'houseId', headerName: 'ID', width: 70 },
        { field: 'PropertyName', headerName: 'PropertyName', width: 150 },
        { field: 'Propertyprice', headerName: 'Propertyprice', width: 130 },
        {
            field: 'image',
            headerName: 'Image',
            width: 90,
            renderCell: (params) => <img src={`http://localhost:7000/Image/${params.value}`} alt="Property" />,
        },
        { field: 'Town', headerName: 'Town', width: 130 },
        { field: 'PropertyType', headerName: 'PropertyType', width: 150 },
        { field: 'County', headerName: 'County', width: 130 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'Year', headerName: 'Year', width: 90 },
        {
            field: 'SeeMore',
            headerName: 'SeeMore',
            sortable: false,
            width: 100,
            renderCell: (params) => <VisibilityIcon onClick={() => showPropertyDetails(params.row)} />,
        },
    ];

    return (
        <>
            <Modal show={selectedProperty !== null} onHide={hidePropertyDetails} >
                <Modal.Header closeButton>
                    <Modal.Title>Property Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <div>
                                {selectedProperty && <img src={`http://localhost:7000/Image/${selectedProperty.image}`} alt="Property" />}
                            </div>

                        </Col>
                        <Col md={6}>
                            <div>
                                <input className='form-control' value={PropertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder="PropertyName" />
                                <input className='form-control mt-2' value={PropertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} placeholder="PropertyPrice" />
                                <input className='form-control mt-2' value={Town} onChange={(e) => setTown(e.target.value)} placeholder="Town" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center' md={6}>
                            <input className='form-control mt-2' value={County} onChange={(e) => setCounty(e.target.value)} placeholder="County" />
                            <Col className='text-center' md={6}>
                                <FormControl variant="outlined" className="mt-3" fullWidth>
                                    <InputLabel id="demo-simple-select-label">Property type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={PropertyType}
                                        label="Property type"
                                        onChange={(e) => setPropertyType(e.target.value)}


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
                            </Col>


                        </Col>
                        <Col className='text-center' md={6}>
                            <textarea className='form-control mt-2' value={Description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                            <input className='form-control mt-2' value={Year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />


                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Button style={{ height: "60px", backgroundColor: "white", color: "black", border: "1px solid #46b5ff" }} className="col-12 mt-2" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                            Upload image
                            <VisuallyHiddenInput
                                className='form-control mt-2'
                                onChange={(e) => { setImage(e.target.files[0]) }}
                                type="file"
                                accept="image/*"
                                name="propertyImage"
                            />

                        </Button>

                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <Button onClick={editProperty} style={{ backgroundColor: "#51ADE5", color: "black", border: "none", width: "80%" }} className="m-2 p-2 col-4 col-sm-4 col-lg-3 col-xl-3">Edit</Button>
                        </Col>
                        <Col md={6}>
                            <Button onClick={() => deleteProperty(selectedProperty.houseId)} style={{ backgroundColor: "#51ADE5", color: "black", border: "none", width: "80%" }} className="m-2 p-2 col-4 col-sm-4 col-lg-3 col-xl-3">Delete</Button>
                        </Col>

                    </Row>
                </Modal.Body>
            </Modal>

            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="row d-flex justify-content-between">
                            <div className="col-6">
                                <div className="row">
                                    <h3>Property Management</h3>
                                    <p>See all the properties that have been uploaded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="row mt-3 d-flex justify-content-between">
                        <div className="col-6 d-flex flex-row"></div>
                    </div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={properties}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                        />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Properties;
