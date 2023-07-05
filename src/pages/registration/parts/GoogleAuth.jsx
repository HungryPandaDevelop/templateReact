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
    <div className="btn reg-btn google--btn" onClick={onGoogleClick}><i> </i><span>Создать через Gmail</span></div>
  )
}

export default GoogleAuth;
