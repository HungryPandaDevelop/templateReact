import imgStub from 'default/frontend/images/icons/avatar-black.svg'


export const renderImg = (roomUserInfo) => {
  const imgLink = roomUserInfo.imgsAccount && roomUserInfo?.imgsAccount[0];

  const img = imgLink ? imgLink : imgStub;

  return img;
}