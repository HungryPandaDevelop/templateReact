import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from 'parts/block/Nav';

import Main from 'pages/Main' ;
import Registration from 'pages/Registration';

const App = ()=> {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes> 
          <Route path='/' exept element={<Main/>} ></Route>
          <Route path='/registration' element={<Registration/>} ></Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
