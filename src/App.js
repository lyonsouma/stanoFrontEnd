import { Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import SignUpPage from "./page/SignUpPage";
import MainPage from "./page/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {SnackTost } from "./useContext/UseContext";
import SimpleSnackbar from "./screenPopups/SnackBar";
import HomePage from "./page/HomePage";
import Dashboard from "./page/Dashboard";
import UsersComponent from "./page/Userspage";
import Properties from "./page/PropertiesPage";
import SellersProperties from "./page/SellerPropaties";
import AddItemComponent from "./page/SellersAddPropertyPage";
import SoldProperties from "./page/SoldPropaties";
import PropertiesRequest from "./page/PropertiesRequest";
import ViewProperties from "./page/veiwProperties";
import AboutPage from "./page/AboutPage";
import AvatarSettingsPage from "./page/AvatarSettingsPage";

function App() {
  const [ServerLink]=useState('http://localhost:7000')
  const [open, setOpen] = useState(true);
  const [message,setMessage]= useState('');
  const [severity,setSeverity]=useState();

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3= () => setShow3(true);


  const SnackBarsValues={
    open,setOpen,
    message,setMessage,
    severity,setSeverity,
    show3,handleClose3,
    handleShow3,ServerLink
  }
  return (
    <>
         <SnackTost.Provider value={SnackBarsValues}>
          <SimpleSnackbar/>
          <Routes>
              <Route path="/" element={<Dashboard/>}>
                 <Route index path="Users" element={<UsersComponent/>}/>
                 <Route path="AllProperties" element={<Properties/>}/>
                 <Route path="SellersProperties" element={<SellersProperties/>}/>
                 <Route path="AddProperties" element={<AddItemComponent/>}/>
                 <Route path="SoldProperties" element={<SoldProperties/>}/>
                 <Route path="PropertiesRequest" element={<PropertiesRequest/>}/>
                 <Route path="AvatarSettingsPage" element={<AvatarSettingsPage/>}/>
              </Route>
              <Route path="/" element={<LandingPage/>}>
                  {/* <Route index path="" element={<HomePage/>}/> */}
                  {/* <Route path="ViewProperties" element={<ViewProperties/>}/>
                  <Route path="AboutPage" element={<AboutPage/>}/> */}
              </Route>
              {/* <Route path="/SignUp" element={<SignUpPage/>}/> */}
              {/* <Route path="/Main" element={<MainPage/>}/> */}
          </Routes>
        </SnackTost.Provider>
    </>
  );
}

export default App;
