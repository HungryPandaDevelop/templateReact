

export const accountFields = {

  name: { 
    type:"text" ,
    name: "name", 
    label: "Имя", 
    placeholder: "Имя", 
    wrapClass: "input-box" ,
    validate: ['required','minLength'],
  },
  dateBerth: { 
    type:"date" ,
    name: "dateBerth", 
    label: "Дата рождения", 
    placeholder: "Дата рождения", 
    wrapClass: "input-box" ,
    validate: ['required','minLength'],
  },
  gender: { 
    type:"switch" ,
    name: "gender", 
    label: "Пол", 
    options: [
      {name:'<div class="man-ico"></div>',value:"man"},
      {name:'<div class="woman-ico"></div>', value:"woman"},
    ],
    wrapClass: "input-box" ,
  },
  goals: { 
    type:"tags" ,
    name: "goals", 
    label: "Цели", 
  },
  currentLocation: { 
    type:"coords" ,
    name: "currentLocation", 
    label: "Tекущие расположение", 
    wrapClass: "input-box" ,
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