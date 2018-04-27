const passwords = ['qweqwe', 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let passTryCount = 3;

do {
  let pass = prompt(`Введите пароль, у вас есть [${passTryCount}] попытки`, '');
  passTryCount -= 1;
  if (pass === null) {
    break;
  } else {
    if (passwords.includes(pass)) {
      alert('Добро пожаловать!');
      break;
    } else if (passTryCount <= 0) {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  }
} while (passTryCount > 0);
