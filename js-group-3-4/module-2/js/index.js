const passwords = ['qweqwe', 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let passTryCount = 3;

do {
  let pass = prompt(
    `Неверный пароль, у вас осталось [${passTryCount}] попыток`,'');
  if (passwords.includes(pass)) {
    alert('Добро пожаловать!');
  } else {
    console.log('kO');
    passTryCount--;
  }
} while (passTryCount > 0);

alert('You have NO attempts');
