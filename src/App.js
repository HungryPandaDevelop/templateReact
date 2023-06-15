import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from 'parts/block/Nav';

import Main from 'pages/Main' ;
import LogIn from 'pages/LogIn';

const App = ()=> {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes> 
          <Route path='/' exept element={<Main/>} ></Route>
          <Route path='/login' element={<LogIn/>} ></Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
