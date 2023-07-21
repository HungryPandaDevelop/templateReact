import { useNavigate } from 'react-router-dom';

import { googleAuth } from 'services/googleAuth';

const GoogleAuth = ({ btnText }) => {
  const navigate = useNavigate();

  const onGoogleClick = () => {
    googleAuth().then(res => {
      if (!res) { return false };
      navigate('/cabinet/', { replace: true });
    });
  }

  return (
    <div className="btn btn-reg btn-google" onClick={onGoogleClick}><i> </i><span>{btnText}</span></div>
  )
}

export default GoogleAuth;
