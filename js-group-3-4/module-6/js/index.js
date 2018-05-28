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
    try {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
      if (this.size === undefined || this.stuffing === undefined) {
        throw new Error(`No required parameters`);
      }
    } catch (error) {
      this.HamburgerException(error);
    }
  }
  /**
   * @method HamburgerException - Catching the ERROR
   * @param {String} error - Ошибка
   * @memberof Hamburger
   */
  HamburgerException(error) {
    console.error('HamburgerException: ', error.message);
  }

  /**
   * @method addTopping - Добавлям добавку(может быть только одна)
   * @param {String} topping - Добавка
   * @memberof Hamburger
   */
  addTopping(topping) {
    try {
      if (this.toppings.includes(topping)) {
        throw new Error(`Duplicate topping ${topping}`);
      } else if (!Hamburger.TOPPINGS[topping]) {
        throw new Error(`Нет такой добавки "${topping}" !!!`);
      } else if (!this.size || !this.stuffing) {
        throw new Error(`Нет основания, нет начинки !!!`);
      } else {
        this.toppings.push(topping);
      }
    } catch (error) {
      this.HamburgerException(error);
    }
  }

  /**
   * @method removeTopping - Удаляем добавку
   * @param {String} topping - Добавка
   * @memberof Hamburger
   */
  removeTopping(topping) {
    try {
      if (!Hamburger.TOPPINGS[topping]) {
        throw new Error(`Нет такой добавки "${topping}" для удаления !!!`);
      }
      this.toppings.find((item, idx) => {
        if (item === topping) {
          this.toppings.splice(idx, 1);
        }
      });
    } catch (error) {
      this.HamburgerException(error);
    }
  }

  /**
   * @method getToppings - Узнать список добавок
   * @memberof Hamburger
   * @return {Array} - Массив добавленных добавок, содержит значения констант
   *                   Hamburger.TOPPING_*
   */
  getToppings() {
    try {
      if (this.toppings.length <= 0) {
        throw new Error(`Вы не добавили ниодной добаки !!!`);
      }
      console.log(this.toppings);
    } catch (error) {
      this.HamburgerException(error);
    }
  }

  /**
   * @method getSize - Узнать размер гамбургера
   * @memberof Hamburger
   * @return {String} - Размер гамбургера
   */
  getSize() {
    try {
      if (this.size === undefined) {
        throw new Error(`SIZE is - ???`);
      }
      console.log(this.size);
    } catch (error) {
      this.HamburgerException(error);
    }
  }

  /**
   * @method getStuffing - Узнать начинку гамбургера
   * @memberof Hamburger
   * @return {String} - Начинка гамбургера
   */
  getStuffing() {
    try {
      if (this.stuffing === undefined) {
        throw new Error(`STUFFING is - ???`);
      }
      console.log(this.stuffing);
    } catch (error) {
      this.HamburgerException(error);
    }
  }

  /**
   * @method calculatePrice - Узнать цену гамбургера
   * @memberof Hamburger
   * @return {Number} - Ценa гамбургера
   */
  calculatePrice() {
    try {
      if (this.size === undefined || this.stuffing === undefined) {
        throw new Error(`SIZE ore STUFFING is undefined`);
      } else {
        const hamSizePrice = Hamburger.SIZES[this.size].price;
        const hamStuffingPrice = Hamburger.STUFFINGS[this.stuffing].price;
        const toppingsPrice = this.toppings.reduce(
          (acc, topping) => acc + Hamburger.TOPPINGS[topping].price,
          0,
        );
        console.log(
          `Price: $${hamSizePrice + hamStuffingPrice + toppingsPrice}`,
        );
      }
    } catch (error) {
      this.HamburgerException(error);
    }
  }

  /**
   * @method calculateCalories - Посчитать клорийность гамбургера
   * @memberof Hamburger
   * @return {Number} - Калорийность гамбургера
   */
  calculateCalories() {
    try {
      if (this.size === undefined || this.stuffing === undefined) {
        throw new Error(`SIZE ore STUFFING is undefined`);
      } else {
        const hamSizeCallories = Hamburger.SIZES[this.size].cal;
        const hamStuffingCallories = Hamburger.STUFFINGS[this.stuffing].cal;
        const stuffingCallories = this.toppings.reduce(
          (acc, topping) => acc + Hamburger.TOPPINGS[topping].cal,
          0,
        );
        console.log(
          `Calories is: ${hamSizeCallories +
            hamStuffingCallories +
            stuffingCallories}`,
        );
      }
    } catch (error) {
      this.HamburgerException(error);
    }
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

// Раскомментируй одно из !!!

//1
// const ham1 = new Hamburger();

//2
// const ham1 = new Hamburger({
//   size: '',
//   stuffing: '',
// });

//3
const ham1 = new Hamburger({
  size: Hamburger.SIZE_LARGE,
  stuffing: Hamburger.STUFFING_MEAT,
});

ham1.addTopping('XXX');
ham1.addTopping(Hamburger.TOPPING_SPICE);
ham1.addTopping(Hamburger.TOPPING_SPICE);
ham1.addTopping(Hamburger.TOPPING_SAUCE);
ham1.addTopping(Hamburger.TOPPING_SAUCE);
ham1.removeTopping('YYY');
ham1.removeTopping(Hamburger.TOPPING_SAUCE);
console.log('=====================');
ham1.getToppings();
ham1.getSize();
ham1.getStuffing();
ham1.calculatePrice();
ham1.calculateCalories();

console.log('ham1: ', ham1);
