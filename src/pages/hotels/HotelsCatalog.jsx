import { useState, useEffect } from 'react';
import axios from 'axios';
import { encode } from "base-64";
const Hotels = () => {


  var url = 'https://api.worldota.net/api/b2b/v3/overview/';
  var username = '5897';
  var password = 'a5a48d2b-2e25-4501-915a-c47d5d3292e0';
  // 
  // var password = 'bar ';
  // console.log(username, password)

  // var password = 'test';
  // var username = 'test';
  // var url = 'http://localhost:4000/users';


  var basicAuth = 'Basic ' + encode(username + ':' + password);

  console.log('basicAuth', basicAuth)
  // var basicAuth = username + ':' + password;


  const getApi = async () => {
    // const fetchAuthToken = await axios({
    //   url: `https://api.worldota.net/api/b2b/v3/overview/`,
    //   method: 'GET',
    //   auth: {
    //     username: username,
    //     password: password,
    //   },
    //   headers: {
    //     Accept: 'application/json',
    //     'Accept-Language': 'en_US',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin': '*',
    //     'mode': 'no-cors',
    //   },
    //   withCredentials: true,
    // });
    // return fetchAuthToken;


    console.log('basicAuth', basicAuth)

    // var raw = JSON.stringify({
    //   "inventory": "all",
    //   "language": "en"
    // });

    var requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": basicAuth,
        // Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        // 'Access-Control-Allow-Origin': 'https://sait.website/',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
        // 'X-My-Custom-Header': 'value-v',
      },
      // body: raw,
      mode: 'no-cors',
      // credentials: 'include',
      // redirect: 'follow'
      // redirect: 'follow',
      // credentials: 'include',
      // credentials: 'same-origin',
      // redirect: 'follow',
      // responseType: 'text',
      // 'mode': 'no-cors',
      // 'X-My-Custom-Header': 'value-v',

    };
    // var url = 'https://api.worldota.net/api/b2b/v3/hotel/info/dump/';

    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
    // .then(response => response.json())
    // .then(data => console.log(data));
    // .then(response => console.log('res1', response))
    // .then(result => console.log('res', result))
    // .catch(error => console.log('error', error));
    // const requestBody = {
    //   user: basicAuth
    // };


    // axios.get(
    //   url,
    //   {},// requestBody,
    //   {
    //     headers: {
    //       'Authorization': 'Basic NTcwMTpmY2MyZTM2OC00ZDlkLTQzODItYjZhYy0wZjMxZjNiYmY2YTE=',
    //       'Access-Control-Allow-Origin': "*",
    //       'Content-Type': 'application/json',
    //       // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    //       // 'Access-Control-Allow-Headers': 'Content-Type',
    //     },
    //   }).then(res => {
    //     console.log('r', res)
    //   })

    // axios(url, {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    //     // 'Content-Type': 'application/json',
    //   },
    //   withCredentials: true,
    //   credentials: 'same-origin',
    // }).then(response => {
    //   console.log(response)
    // })
  }


  return (
    <div>
      HotelsCatalog

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="btn"
        onClick={getApi}
      >GET</div>
      {basicAuth}
    </div>
  )
}

export default Hotels
