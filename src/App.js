import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from 'parts/block/Nav';
import AuthInfo from 'parts/block/AuthInfo';
import InfoAccount from 'parts/block/InfoAccount';

import Main from 'pages/Main' ;
import Registration from 'pages/Registration';
import Authorization from 'pages/Authorization';
import Cabinet from 'pages/Cabinet';

const App = ()=> {
  return (
      <>
        <BrowserRouter>
          <AuthInfo />
          <InfoAccount />
          <Nav/>
          <Routes> 
            <Route path='/' exept element={<Main/>} ></Route>
            <Route path='/registration' element={<Registration/>} ></Route>
            <Route path='/authorization' element={<Authorization/>} ></Route>
            <Route path='/Cabinet' element={<Cabinet/>} ></Route>
          </Routes>
        </BrowserRouter>

              <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
  );
}


export default App;
