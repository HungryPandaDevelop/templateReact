import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivatRoute from 'parts/PrivatRoute';

import Nav from 'parts/block/Nav';
import AuthInfo from 'parts/block/AuthInfo';
import InfoAccount from 'parts/block/InfoAccount';

import Main from 'pages/Main' ;
import Registration from 'pages/Registration';
import Authorization from 'pages/Authorization';
import Cabinet from 'pages/Cabinet';

import ListUsers from 'pages/ListUsers';
import Chat from 'pages/Chat';


// import GoogleAuth from 'pages/GoogleAuth';
// import VKauth from 'pages/VKauth';

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
            <Route path='/cabinet' element={<PrivatRoute/>} >
              <Route index element={<Cabinet/>} ></Route>
              <Route path='/cabinet/list_users' element={<ListUsers/>} ></Route>
              <Route path='/cabinet/chat' element={<Chat/>} ></Route>
              <Route path='/cabinet/chat/:roomUrl'  element={<Chat/>} ></Route>
            </Route>
            {/* <Route path='/vk' element={<VKauth/>} ></Route> */}
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
