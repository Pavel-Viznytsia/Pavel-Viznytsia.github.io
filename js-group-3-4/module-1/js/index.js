const TABA = 'Taba';
const SHARM = 'Sharm';
const HURGADA = 'Hurgada';

let toTaba = 6;
let toSharm = 15;
let toHurgada = 25;

let msg = prompt('Введи кол-во мест', '');
let userPick = Number(msg);
isPickValid = userPick > 0 && !Number.isNaN(userPick);

if (isPickValid) {
  if (userPick <= toTaba && window.confirm(`Ты готов поехать на ${TABA}`)) {
    toTaba = toTaba - userPick;
    console.log('toTaba ', toTaba);
    alert(`Приятного путешествия в группе на ${TABA}`);
  } else if (
    userPick <= toSharm &&
    window.confirm(`Ты готов поехать на ${SHARM}`)
  ) {
    toSharm = toSharm - userPick;
    console.log('toSharm ', toSharm);
    alert(`Приятного путешествия в группе на ${SHARM}`);
  } else if (
    userPick <= toHurgada &&
    window.confirm(`Ты готов поехать на ${HURGADA}`)
  ) {
    toHurgada = toHurgada - userPick;
    console.log('toHurgada ', toHurgada);
    alert(`Приятного путешествия в группе на ${HURGADA}`);
  } else {
    alert(`Нам очень жаль, приходите еще!`);
  }
} else {
  alert(`Ошибка ввода`);
}