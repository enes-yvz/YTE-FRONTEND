import Register from './Register';
import Login from './Login';
import Created from './Created';
import Admin from './Admin';
import Assistant from './Assistant';
import Instructor from './Instructor';
import Student from './Student';
import ListUsers from './ListUsers';
import ListLecturesAdmin from './ListLecturesAdmin';
import ListLectures from './ListLectures';
import Lecture from './Lecture';
import Forgot from './Forgot';
import LectureCreated from './LectureCreated';


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
        <Route path="/created" element={<Created/>} />
        <Route path="/lecturecreated" element={<LectureCreated/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={(
              <>
                <Admin/>
                <Outlet/>
                <Register/>
              </>
        )}/>
        <Route path="/listUsers" element={(
              <>
                <Admin/>
                <Outlet/>
                <ListUsers/>
              </>
        )}/>
        <Route path="/listLecturesAdmin" element={(
              <>
                <Admin/>
                <Outlet/>
                <ListLecturesAdmin/>
              </>
        )}/>
        <Route path="/listLectures" element={(
              <>
                <Student/>
                <Instructor/>
                <Assistant/>
                <Outlet/>
                <ListLecturesAdmin/>
              </>
        )}/>
        <Route path="/student" element={<Student/>} />
        <Route path="/assistant" element={<Assistant/>} />
        <Route path="/instructor" element={<Instructor/>} />
        <Route path="/admin" element={<Admin/>} />  
        <Route path="/forgot" element={<Forgot/>} />  
        <Route path="/lecture" element={(
              <>
                <Admin/>
                <Outlet/>
                <Lecture/>
              </>
        )}/>
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
