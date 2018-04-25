const passwords = ['qweqwe', 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let passTryCount = 3;

do {
  let pass = prompt(`Введите пароль, у вас есть [${passTryCount}] попытки`, '');
  if (passTryCount > 0) {
    if (passwords.includes(pass) && passTryCount > 0) {
      alert('Добро пожаловать!');
      break;
    } else {
      console.log('kO');
      passTryCount--;
    }
  } else {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
} while (passTryCount > 0);
