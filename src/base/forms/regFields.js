
export const regFields = {
  email: { 
    name: "email", 
    label: "Почта", 
    placeholder: "Почта", 
    type:"text" , 
    validate: ['required','minLength','mailCheck'],
    wrapClass: "account-item  col-12 input-animate-label",
  },
  // password: { 
  //   name: "password", 
  //   label: "Пароль",
  //   placeholder: "Пароль",
  //   type:"password", 
  //   validate: ['required','minLength','checkRus'],
  //   wrapClass: "account-item  col-12 input-animate-label",
  // },
};
