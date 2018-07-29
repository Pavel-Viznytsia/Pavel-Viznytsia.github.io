const DELAY = 1500;

let goodsAmount = 100;

function processOrder(amount) {
  return new Promise((onResolve, onReject) => {
    setTimeout(() => {
      if (typeof amount === "number" && amount > 0) {
        const res = goodsAmount >= amount ? "Ваш заказ готов!" : "К сожалению на складе недостаточно товаров!";
        onResolve(res);
        goodsAmount = goodsAmount - amount;
      } else {
        onReject("Некоректный ввод!");
      }
    }, DELAY);
  });
}

// Вызовы функции для проверки
processOrder(-50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.error(err));

processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.error(err));

processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.error(err));

processOrder(50)
  .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.error(err));

processOrder("qweqwe")
  .then(x => console.log(x))
  .catch(err => console.error(err)); // Некоректный ввод!
