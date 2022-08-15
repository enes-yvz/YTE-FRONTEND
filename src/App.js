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
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Created" element={<Created/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Student" element={<Student/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Instructor" element={<Instructor/>} />
        <Route path="/Assistant" element={<Assistant/>} />
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
