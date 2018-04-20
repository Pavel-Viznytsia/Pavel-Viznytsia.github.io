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
  if (userPick <= toTaba) {
    const isSelect = window.confirm(`Ты готов поехать в ${TABA}`);
    if (isSelect) {
      toTaba = userPick - toTaba;
      alert(`Приятного путешествия в группе на ${TABA}`);
    } else {
      alert(`Нам очень жаль, приходите еще!`);
    }
  } else if (userPick <= toSharm) {
    const isSelect = window.confirm(`Ты готов поехать в ${SHARM}`);
    if (isSelect) {
      toTaba = userPick - toSharm;
      alert(`Приятного путешествия в группе на ${SHARM}`);
    } else {
      alert(`Нам очень жаль, приходите еще!`);
    }
  } else if (userPick <= toHurgada) {
    const isSelect = window.confirm(`Ты готов поехать в ${HURGADA}`);
    if (isSelect) {
      toTaba = userPick - toHurgada;
      alert(`Приятного путешествия в группе на ${HURGADA}`);
    } else {
      alert(`Нам очень жаль, приходите еще!`);
    }
  } else {
    alert(`Извините, мест нет.`);
  }
} else {
  alert(`Ошибка ввода`);
}
