const getAllBtn = document.querySelector( '.getAllBtn' );
const inputId = document.querySelector( '.inputId' );
const getByIdBtn = document.querySelector( '.getByIdBtn' );
const inputGetByName = document.querySelector( '.getByName' );
const inputGetByAge = document.querySelector( '.getByAge' );
const addBtn = document.querySelector( '.addBtn' );
const delBtn = document.querySelector( '.delBtn' );
const updateBtn = document.querySelector( '.updateBtn' );
const outData = document.querySelector( '.outData' );
const url = 'https://test-users-api.herokuapp.com/users/';

getAllBtn.addEventListener( 'click', getAllUsers );
getByIdBtn.addEventListener( 'click', getUserById );

function getAllUsers ( evt ) {
  evt.preventDefault();
  fetch( url )
    .then( response => response.json() )
    .then( data => {
      if ( data.errors.length === 0 ) return data;
      throw new Error( `Error: ${ data.errors }. Status: ${ data.status }` );
    } )
    .then( data => console.log( data ) )
    .catch( err => console.error( err ) );
}

function getUserById ( evt ) {
  evt.preventDefault();
  fetch( `${url}${inputId.value}` )
    .then( response => response.json() )
    .then( data => {
      if ( data.errors.length === 0 ) return data;
      throw new Error( `Error: ${ data.errors }. Status: ${ data.status }` );
    } )
    .then( data => console.log( data ) )
    .catch( err => console.error( err ) );
}

// const article = document.getElementById( 'electriccars' );

// console.log( 'article.dataset.columns ', article.dataset.columns );
// console.log( 'article.dataset.indexNumber ', article.dataset.indexNumber );
// console.log( 'article.dataset.parent ', article.dataset.parent );
