import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Created from './Created';
import Admin from './Admin';
import Assistant from './Assistant';
import Instructor from './Instructor';
import Student from './Student';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet 
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Created" element={<Created/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Register" element={(
              <>
                <Admin/>
                <Outlet/>
                <Register/>
              </>
            )}/>
        <Route path="/Student" element={<Student/>} />
        <Route path="/Assistant" element={<Assistant/>} />
        <Route path="/Instructor" element={<Instructor/>} />
        <Route path="/Admin" element={<Admin/>} />  
      </Routes>
      <ToastContainer
        style={{ height:"15%"}}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnFocusLoss
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
