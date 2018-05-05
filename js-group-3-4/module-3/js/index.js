const login = prompt('Login', '');
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const addLogin = (logins, login) => {
  console.log(checkLoginValidity(login));
  if (checkLoginValidity(login) === true) {
    console.log('OK');
    checkIfLoginExists(logins, login);
  } else {
    console.log('Ошибка!');
  }
};

const checkLoginValidity = login => {
  loginLength = login.length;
  if (loginLength >= 4 && loginLength < 16) {
    return true;
  } else {
    return false;
  }
};

const checkIfLoginExists = (logins, login) => {
  if (logins.includes(login)) {
    console.log('Такой логин уже используется!');
  } else {
    logins.push(login);
    console.log('Логин успешно добавлен!');
  }
};

if (login !== null) {
  addLogin(logins, login);
}
