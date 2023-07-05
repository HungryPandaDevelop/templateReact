
export const regFieldsOne = {
  name: { 
    name: "name", 
    label: "Имя", 
    placeholder: "Имя", 
    type:"text" , 
    validate: ["required","minLength"],
    wrapClass: "input-box  col-6",
  },
  email: { 
    name: "email", 
    label: "Почта", 
    placeholder: "Почта", 
    type:"text" , 
    validate: ['required','minLength','mailCheck'],
    wrapClass:"input-box  col-6",
  },
  dateBerth: { 
    name: "dateBerth", 
    label: "Дата рождения", 
    placeholder: "Дата рождения", 
    type:"date" , 
    wrapClass:"input-box col-6",
  },
  city: { 
    name: "city", 
    label: "Город", 
    placeholder: "Город", 
    type:"city" , 
    wrapClass:"input-box  col-6",
  },
  password: { 
    name: "password", 
    label: "Пароль",
    placeholder: "Пароль",
    type:"password", 
    validate: ['required','minLength'],
    wrapClass: "input-box  col-12",
  },
};


export const regFieldsSecond = {
  photos: { 
    name: "photos", 
    type:"dropzone" , 
    wrapClass: "input-box col-12",
  },
};
export const regFieldsThree = {
  phone: { 
    name: "phone", 
    type:"phone" , 
    wrapClass: "input-box col-12",
  },
};

export const regFieldVertification = {
  vert: { 
    name: "vert", 
    type:"text" , 
    wrapClass: "input-box col-12",
  },
};
