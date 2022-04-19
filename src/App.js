
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Services from './Components/Services/Services';
import ServiceInfo from './Components/ServiceInfo/ServiceInfo';
import RequiredAuth from './RequiredAuth/RequiredAuth';


function App() {
  return (
    <div className='container w-full mx-auto '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='user/:userId' element={
          <RequiredAuth>
            <ServiceInfo></ServiceInfo>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>





    </div>
  );
}

export default App;
