import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivatRoute from 'blocks/PrivatRoute';
import Header from 'blocks/header/Header';
import Footer from 'blocks/footer/Footer';

import CheckAuth from 'blocks/header/CheckAuth';


import Main from 'pages/Main' ;
import Cabinet from 'pages/cabinet/Cabinet';


import AuthStart from 'pages/auth/AuthStart';
import RegStart from 'pages/auth/RegStart';

import RegPhone from 'pages/auth/RegPhone';
import RegMail from 'pages/auth/RegMail';
import AuthMail from 'pages/auth/AuthMail';

import ListUsers from 'pages/ListUsers';

import Chat from 'pages/Chat';
import ChatRoom from 'pages/chat/Room';



// import VKauth from 'pages/VKauth';


const App = ()=> {
  return (
      <>
        <BrowserRouter>
          <CheckAuth />
          <Header />
          
          

          <Routes> 
            <Route path='/' exept element={<Main/>} ></Route>

            <Route path='/auth-start' element={<AuthStart/>} ></Route>
            <Route path='/reg-start' element={<RegStart/>} ></Route>
            <Route path='/reg-mail' element={<RegMail/>} ></Route>
            <Route path='/auth-mail' element={<AuthMail/>} ></Route>
            <Route path='/reg-phone' element={<RegPhone/>} ></Route> 


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
