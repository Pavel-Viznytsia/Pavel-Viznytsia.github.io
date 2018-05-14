const Cashier = function(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.countTotalPrice = order => {
    const productsList = Object.keys(this.products);
    const ordersList = Object.keys(order);
    for (const product of ordersList) {
      if (!productsList.includes(product)) {
        alert(`Товара с именем ${product} нет`);
        return null;
      } else {
        this.totalPrice += order[product] * products[product];
      }
    }
  };

  this.getCustomerMoney = () => {
    let buyerInput;
    let num;

    do {
      buyerInput = prompt(
        `Введите число больше или равную сумме покупки ${this.totalPrice}грн.`,
        `${this.totalPrice}`,
      );
      if (buyerInput !== null) {
        isNum = Number(buyerInput);
      } else {
        return null;
      }
    } while (Number.isNaN(isNum) || buyerInput < this.totalPrice);

    this.customerMoney = buyerInput;
  };

  this.countChange = () => {
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  };

  this.reset = () => {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };

  this.serve = order => {
    if (this.countTotalPrice(order) === null) {
      return;
    } else if (this.getCustomerMoney() === null) {
      console.log('Очень жаль, что-то пошло не так, приходите еще');
      return;
    } else {
      console.log(`Спасибо за покупку, Ваша сдача ${this.countChange()}грн.`);
      this.reset();
    }
  };
};

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25,
};

const order1 = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1,
  // sss: 123,
};

// const order2 = {
//   bread: 3,
//   milk: 2,
//   apples: 5,
//   chicken: 1,
//   pork: 1,
//   cheese: 3,
//   tea: 1,
//   candy: 5,
// };

const cashier1 = new Cashier('Mango', products);
// const cashier2 = new Cashier('Poly', products);

cashier1.serve(order1);
// cashier2.serve(order2);
