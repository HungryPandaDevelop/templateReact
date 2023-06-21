

export const accountFields = {
  accountName: { 
    type:"text" ,
    name: "accountName", 
    label: "Имя аккаунта  *", 
    placeholder: "Имя аккаунта  *", 
    wrapClass: "col-12 account-item input-animate-label" ,
    validate: ['required','minLength'],
    num: "01",
  },
  name: { 
    type:"text" ,
    name: "name", 
    label: "Имя", 
    placeholder: "Имя", 
    wrapClass: "col-12 account-item input-animate-label" ,
    validate: ['required','minLength'],
  },
  family: { 
    type:"text" ,
    name: "family", 
    label: "Фамилия", 
    placeholder: "Фамилия", 
    wrapClass: "col-12 account-item input-animate-label" ,
  },
  secondName: { 
    type:"text" ,
    name: "secondName", 
    label: "Отчество", 
    placeholder: "Отчество", 
    wrapClass: "col-12 account-item input-animate-label" ,
  },
  phoneCompany: {
    type:"phone" ,
    name: "phoneCompany", 
    label: "Телефон", 
    wrapClass: "col-12 account-item input-animate-label" ,
    placeholder: "Введите Отчество", 
    validate: ['required','minLength'],
  },
  imgsAccount: {
    type: "file", 
    name: "imgsAccount", 
    label:"Фото профиля", 
    labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
    typeFile: "img", 
    typeUpload:".png, .jpg, .jpeg", 
    maxSize: 5242880, 
    textEmpty: "На данный момент фоно не выбрано",
    wrapClass: "col-12 input-photo-container account-item",
  },
}