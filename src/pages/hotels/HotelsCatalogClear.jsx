
const Hotels = () => {

  var url = 'https://api.worldota.net/api/b2b/v3/overview/';
  var username = '5897';
  var password = 'a5a48d2b-2e25-4501-915a-c47d5d3292e0';

  var basicAuth = 'Basic ' + window.btoa(username + ':' + password);

  console.log('basicAuth', basicAuth)


  const getApi = () => {

    var requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": basicAuth,
        'Content-Type': 'application/json',
      },
      // mode: 'no-cors',
      // credentials: 'include',
      // redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  }


  return (
    <div>
      HotelsCatalog
      <div className="btn"
        onClick={getApi}
      >GET</div>
      {basicAuth}
    </div>
  )
}

export default Hotels
