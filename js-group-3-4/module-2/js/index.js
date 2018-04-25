const passwords = ['qweqwe', 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let passTryCount = 3;

do {
  let pass = prompt(`Введите пароль, у вас есть [${passTryCount}] попытки`, '');
  if (passTryCount > 1) {
    if (passwords.includes(pass) && passTryCount >= 1) {
      alert('Добро пожаловать!');
      break;
    } else {
      passTryCount--;
    }
  } else {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    passTryCount--;
  }
} while (passTryCount > 0);
