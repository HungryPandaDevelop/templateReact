import { useNavigate } from 'react-router-dom';

import { googleAuth } from 'services/googleAuth';

const GoogleAuth = () => {
  const navigate = useNavigate();

  const onGoogleClick = () => {
    googleAuth().then(res => {
      if (!res) { return false };
      navigate('/cabinet/', { replace: true });
    });
  }

  return (
    <div>
      <h1>Авторизация через Google</h1>
      <button className="btn btn--black-border" onClick={onGoogleClick}>Google Авторизация</button>
    </div>
  )
}

export default GoogleAuth;
