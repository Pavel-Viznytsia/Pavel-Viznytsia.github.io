const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const filter = {
  size: [],
  color: [],
  release_date: [],
};

document.addEventListener( 'DOMContentLoaded', initPage );

const checkBoxes = document.querySelectorAll( 'input[type="checkbox"]' );
const filterForm = document.querySelector( '.js-form' );
const filtrBtn = document.querySelector( 'button[type="submit"]' );
const resetBtn = document.querySelector( 'button[type="reset"]' );
const goodsContainer = document.querySelector( '.goods-container' );

filtrBtn.addEventListener( 'click', handlGoodsFilter );
resetBtn.addEventListener( 'click', handlResetFilter );


function initPage() {
  const source = document.querySelector( '.goods-card' ).innerHTML.trim();
  const template = Handlebars.compile( source );
  const result = template( { laptops } );

  goodsContainer.insertAdjacentHTML( 'afterbegin', result );
}

function handlGoodsFilter ( event ) {
  event.preventDefault();
  goodsContainer.innerHTML = '';

  const filteredGoods = laptops.filter(item => {

  });

  // size: 13,
  // color: 'white',
  // release_date: 2015,

  const filter = getFilter( checkBoxes );
  console.log( filter );
  console.log( goodsContainer );
}

function getFilter ( checkBoxes ) {
  checkBoxes.forEach( elem => {
    if ( elem.checked && elem.name === 'size' ) {
      filter.size.push( elem.value );
    } else if ( elem.checked && elem.name === 'color' ) {
      filter.color.push( elem.value );
    } else if ( elem.checked && elem.name === 'release_date' ) {
      filter.release_date.push( elem.value );
    }
  } );
  return filter;
}

function handlResetFilter () {
  filterForm.reset();
  filter.size = [];
  filter.color = [];
  filter.release_date = [];
}


// const person = {
//   age: 10,
//   setAge ( newAge ) {
//     this.age = newAge;
//   },
//   refreshAge ( userId ) {
//     fetchAgeFromDb( function ( newAge ) {
//       person.setAge( newAge );
//     } );
//   },
// };
// function fetchAgeFromDb ( cb ) {
//   cb( 20 );
// }
// person.refreshAge();
// console.log( person.age );
