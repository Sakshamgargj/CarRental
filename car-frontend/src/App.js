import {Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Vehicle from './components/page4';
import ContactUs from './components/contactUs';
import DisplayVehicle from './components/displayVehicle';
import OurTeam from './components/ourTeam';
import Admin from './admin/admin';
import Page3 from './components/page3';
import AddCar from './admin/addCar';
import MemberData from './admin/memberData';
import Orders from './admin/orders';
import Vehicles from './admin/vehicles';
import UpdateCar from './admin/updateCar';
import ForgotPass from './components/forgotPass';
import Profile from './components/profile';
import CarShow from './components/carShow';

function App() {
  return (
    <div>
      {/* {document.URL.endsWith('admin')?"":<Header/>} */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin/addCar' element={<AddCar/>} />
        <Route path='/admin/updateCar' element={<UpdateCar/>} />
        
        <Route path='/admin/memberData' element={<MemberData/>} />
        <Route path='/admin/orders' element={<Orders/>} />
        <Route path='/admin/vehicles' element={<Vehicles/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/team' element={<OurTeam/>} />
        <Route path='/vehicle' element={<Vehicle/>} />
        <Route path='/reserveVehicle' element={<Page3/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/forgotpassword' element={<ForgotPass/>} />
        <Route path='/displayVehicle' element={<DisplayVehicle/>} />
        <Route path='/carShow' element={<CarShow/>} />
      </Routes>
      {/* {document.URL.endsWith('admin')?"":<Footer/>} */}
    </div>
  );
}

export default App;
