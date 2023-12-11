import { Button, Collapse, Container, Form, FormCheck, FormControl } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


const PropertiesRequest=()=>{
    const [open, setOpen] =useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const[userResponse,setUserResponse]=useState([]);
    const[link,setLink]=useState();
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));

    useEffect(()=>{
        const GetProducts=async()=>{
            try{
                const response=await axios.get();
                setUserResponse(response.data.sendUser)
            }
            catch(error){
                console.log(error)
            }
        }
        GetProducts();
    },[]);
    const ImgColumn=(Img,altName)=>{
       return <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            >
                <Avatar  alt={`${altName}`} src={Img||`${link}/Public/${Img}`} />
        </StyledBadge>
    }
    const StatusColumn=(Status)=>{
        if(!Status){
            return <span className="text-danger"></span>
        }
        else{
            return <span className="text-success">{Status}</span>
        }
    }
    const [actions]=useState(
        <div>
       
        </div>
      );
      const Columns=[
          {
              name:"Profile",
              cell: row =>ImgColumn(row.UserImg,row.FullName)
          },
          {
              name:"FullName",
              selector: row=>row.FullName,
              sortable:true
          },
          {
              name:"Email",
              selector: row=>row.Email,
              sortable:true
          },
          {
              name:"Role",
              selector: row=>row.Role.RoleName,
              width:"90px",
              sortable:true
          },
          {
              name:"Status",
              selector: row=>StatusColumn(row.Activities.Status),
              sortable:true
          },
          {
              name:"Action",
              selector: actions,
              width:"130px",
              sortable:true
          },
      ];
      const myStyle={
        rows:{
            style:{
                backgroundColor:"#ffffff"
            }
        },
        headRow: {
            style: {
                backgroundColor:"#fafbfe",
                fontSize:"13px",
                fontWeight:"700"
            }
        }
      }
     
    return(
        <Container>
            <div className="row">
                <div className="row d-flex justify-content-between">
                    <div className="col-6">
                        <div className="row">
                            <h3>Properties Request</h3>
                            <p>See all the People that have contacted you</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div style={{border:"1px solid #d4d4d4",borderRadius:"7px"}} className="col-12 mt-3">
                    <div className="row mt-3 d-flex justify-content-between">
                        <div className="col-6 d-flex flex-row">
                        
                        </div>
                    </div>
                    <div className="row">
                    </div>
                   <DataTable
                        className="mt-4"
                        columns={Columns}
                        data={userResponse}
                        customStyles={myStyle}
                        pagination
                        fixedHeader
                        selectableRows
                    ></DataTable>
                </div>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                    <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
            </Dialog>
        </Container>
    )
}
export default PropertiesRequest;