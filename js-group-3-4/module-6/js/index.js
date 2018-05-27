/**
 * @class Hamburger Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
  /**
   * Creates an instance of Hamburger.
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   * @memberof Hamburger
   */
  constructor({ size, stuffing }) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  /**
   * @method addTopping - Добавлям добавку(может быть только одна)
   * @param {String} topping - Добавка
   * @memberof Hamburger
   */
  addTopping(topping) {
    if (!this.toppings.includes(topping)) {
      this.toppings.push(topping);
    } else {
      console.warn(`This toppings ${topping} is already exist`);
    }
  }

  /**
   * @method removeTopping - Удаляем добавку
   * @param {String} topping - Добавка
   * @memberof Hamburger
   */
  removeTopping(topping) {
    if (this.toppings.length > 0) {
      this.toppings.find((item, idx) => {
        if (item === topping) {
          this.toppings.splice(idx, 1);
        }
      });
    } else {
      console.warn(`There is nothing to delete in Hamburger toppings`);
    }
  }

  /**
   * @method getToppings - Узнать список добавок
   * @memberof Hamburger
   * @return {Array} - Массив добавленных добавок, содержит значения констант
   *                   Hamburger.TOPPING_*
   */
  getToppings() {
    return this.toppings;
  }

  /**
   * @method getSize - Узнать размер гамбургера
   * @memberof Hamburger
   * @return {String} - Размер гамбургера
   */
  getSize() {
    return this.size;
  }

  /**
   * @method getStuffing - Узнать начинку гамбургера
   * @memberof Hamburger
   * @return {String} - Начинка гамбургера
   */
  getStuffing() {
    return this.stuffing;
  }

  /**
   * @method calculatePrice - Узнать цену гамбургера
   * @memberof Hamburger
   * @return {Number} - Ценa гамбургера
   */
  calculatePrice() {
    const hamSizePrice = Hamburger.SIZES[this.size].price;
    const hamStuffingPrice = Hamburger.STUFFINGS[this.stuffing].price;
    const toppingsPrice = this.toppings.reduce(
      (acc, topping) => acc + Hamburger.TOPPINGS[topping].price,
      0,
    );
    return hamSizePrice + hamStuffingPrice + toppingsPrice;
  }

  /**
   * @method calculateCalories - Посчитать клорийность гамбургера
   * @memberof Hamburger
   * @return {Number} - Калорийность гамбургера
   */
  calculateCalories() {
    const stuffingCallories = this.toppings
      .map(item => Hamburger.TOPPINGS[item].cal)
      .reduce((acc, val) => acc + val, 0);
    return (
      Hamburger.SIZES[this.size].cal +
      Hamburger.STUFFINGS[this.stuffing].cal +
      stuffingCallories
    );
  }
}

Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZE_SMALL = 'SIZE_SMALL';

Hamburger.SIZES = {
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    cal: 100,
  },
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    cal: 50,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    cal: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    cal: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    cal: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    cal: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    cal: 5,
  },
};

const ham1 = new Hamburger({
  size: Hamburger.SIZE_LARGE,
  stuffing: Hamburger.STUFFING_MEAT,
});

ham1.addTopping(Hamburger.TOPPING_SPICE);
ham1.addTopping(Hamburger.TOPPING_SPICE);
ham1.addTopping(Hamburger.TOPPING_SAUCE);
ham1.addTopping(Hamburger.TOPPING_SAUCE);
ham1.removeTopping(Hamburger.TOPPING_SAUCE);
// ham1.removeTopping(Hamburger.TOPPING_SPICE);
// ham1.removeTopping(Hamburger.TOPPING_SPICE);
console.log(ham1.getToppings);
console.log('The toppings of Hamburger is: ', ham1.getToppings());
console.log('The size of Hamburger is: ', ham1.getSize());
console.log('The stuffings of Hamburger is: ', ham1.getStuffing());
console.log('Total price, $', ham1.calculatePrice());
console.log('Total calories, cal', ham1.calculateCalories());

console.log('ham1 ', ham1);
