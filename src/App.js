import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivatRoute from 'parts/PrivatRoute';


import AuthInfo from 'parts/block/AuthInfo';


import Main from 'pages/Main' ;
import Authorization from 'pages/Authorization';
import Cabinet from 'pages/Cabinet';


import RegStart from 'pages/registration/RegStart';
import RegEnd from 'pages/registration/RegEnd';
import RegPhone from 'pages/registration/RegPhone';
import RegMail from 'pages/registration/RegMail';

import ListUsers from 'pages/ListUsers';

import Chat from 'pages/Chat';
import ChatRoom from 'pages/chat/Room';


// import GoogleAuth from 'pages/GoogleAuth';
// import VKauth from 'pages/VKauth';

import Header from 'parts/header/Header';
import Footer from 'parts/footer/Footer';

const App = ()=> {
  return (
      <>
        <BrowserRouter>
          <AuthInfo />
          <Header />
          
          

          <Routes> 
            <Route path='/' exept element={<Main/>} ></Route>
            <Route path='/authorization' element={<Authorization/>} ></Route>

            <Route path='/reg-start' element={<RegStart/>} ></Route>
            <Route path='/reg-mail' element={<RegMail/>} ></Route>
            <Route path='/reg-phone' element={<RegPhone/>} ></Route> 

            <Route path='/reg-end' element={<RegEnd/>} ></Route> 



            <Route path='/cabinet' element={<PrivatRoute/>} >
              <Route index element={<Cabinet/>} ></Route>
              <Route path='/cabinet/list_users' element={<ListUsers/>} ></Route>
              <Route path='/cabinet/chat' element={<Chat/>} ></Route>
              <Route path='/cabinet/chat/:roomId'  element={<Chat/>} ></Route>
            </Route>
            {/* <Route path='/vk' element={<VKauth/>} ></Route> */}
          </Routes>
          <Footer />
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
