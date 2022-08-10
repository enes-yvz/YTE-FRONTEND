import logo from './logo.svg';
import './App.css';
import Register from './Register';
import SignIn from './SignIn';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
