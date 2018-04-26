const passwords = ['qweqwe', 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let passTryCount = 3;

do {
  let pass = prompt(`Введите пароль, у вас есть [${passTryCount}] попытки`, '');
  passTryCount--;
  if (pass !== null) {
    if (passwords.includes(pass)) {
      alert('Добро пожаловать!');
      break;
    }
    if (passTryCount < 1) {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  } else {
    break;
  }
} while (passTryCount > 0);
