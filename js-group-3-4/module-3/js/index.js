const login = 3;
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const addLogin = (logins, login) => {
  if (checkLoginValidity(login) === false) {
    console.log('Ошибка');
  } else {
    console.log('OK');
  }
};

const checkLoginValidity = login => {
  let loginLength = login.length;
  if (loginLength > 4 && loginLength < 16) {
    return true;
  } else {
    return false;
  }
};

addLogin(logins, login);
