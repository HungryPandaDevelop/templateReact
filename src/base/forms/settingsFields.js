

export const settingFieldsOne = {

  name: { 
    type:"text" ,
    name: "email", 
    label: "Имя", 
    placeholder: "Имя", 
    wrapClass: "input-box" ,
  },
  dateBerth: { 
    type:"text" ,
    name: "dateBerth", 
    label: "Телефон", 
    placeholder: "Дата рождения", 
    wrapClass: "input-box" ,
    validate: ['required','minLength'],
  },
  passOld: { 
    type:"text" ,
    name: "passOld", 
    label: "Старый пароль", 
    placeholder: "Старый пароль", 
    wrapClass: "input-box" ,
    validate: ['required','minLength'],
  },
  passNew: { 
    type:"text" ,
    name: "passNew", 
    label: "Новый пороль", 
    placeholder: "Новый пороль", 
    wrapClass: "input-box" ,
    validate: ['required','minLength'],
  },
  passNewCheck: { 
    type:"text" ,
    name: "passNewCheck", 
    label: "Подтвержидения пароля", 
    placeholder: "Подтвержидения пароля", 
    wrapClass: "input-box" ,
    validate: ['required','minLength'],
  },
}