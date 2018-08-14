const getAllBtn = document.querySelector( '.getAllBtn' );
let inputId = document.querySelector( '.inputId' );
const getByIdBtn = document.querySelector( '.getByIdBtn' );
let inputGetByName = document.querySelector( '.getByName' );
let inputGetByAge = document.querySelector( '.getByAge' );
const addBtn = document.querySelector( '.addBtn' );
const delBtn = document.querySelector( '.delBtn' );
const updateBtn = document.querySelector( '.updateBtn' );
const result = document.querySelector( '.result' );
const url = 'https://test-users-api.herokuapp.com/users/';

getAllBtn.addEventListener( 'click', getAllUsers );
getByIdBtn.addEventListener( 'click', getUserById );
addBtn.addEventListener( 'click', addUser );
delBtn.addEventListener( 'click', deleteUser );
updateBtn.addEventListener( 'click', updateUser );

function getAllUsers ( evt ) {
  evt.preventDefault();
  fetch( url )
    .then( response => response.json() )
    .then( data => {
      if ( data.errors.length === 0 ) return data;
      throw new Error( `Error: ${ data.errors }. Status: ${ data.status }` );
    } )
    .then( data => {
      result.innerHTML = null;
      let rowData = '';
      data.data.forEach( item => {
        const outData = `
        <tr>
          <td>${ item.id }</td>
          <td>${ item.name }</td>
          <td>${ item.age }</td>
        </tr>`;
        rowData += outData;
      } );
      result.innerHTML = rowData;
      inputId = '';
      inputGetByName = '';
      inputGetByAge = '';
    } )
    .catch( err => console.error( err ) );
}

function getUserById ( evt ) {
  evt.preventDefault();
  fetch( `${ url }${ inputId.value }` )
    .then( response => response.json() )
    .then( data => {
      if ( data.errors.length === 0 ) return data;
      throw new Error( `Error: ${ data.errors }. Status: ${ data.status }` );
    } )
    .then( data => {
      result.innerHTML = null;
      const item = data.data;
      const outData = `
        <tr>
          <td>${ item.id }</td>
          <td>${ item.name }</td>
          <td>${ item.age}</td>
        </tr>`;
      rowData = outData;
      result.innerHTML = rowData;
      inputId = '';
    } )
    .catch( err => console.error( err ) );
}

function addUser ( evt ) {
  evt.preventDefault();
  fetch( url, {
    method: 'POST',
    body: JSON.stringify( {
      name: `${ inputGetByName.value }`,
      age: `${ inputGetByAge.value }`,
    } ),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  } )
    .then( response => response.json() )
    .then( data => {
      if ( data.errors.length === 0 ) return data;
      throw new Error( `Error: ${ data.errors }. Status: ${ data.status }` );
    } )
    .then( data => {
      result.innerHTML = null;
      const item = data.data;
      const outData = `
        <tr>
          <td>${ item._id }</td>
          <td>${ item.name }</td>
          <td>${ item.age }</td>
        </tr>`;
      rowData = outData;
      result.innerHTML = rowData;
      inputGetByName = '';
      inputGetByAge = '';
    } )
    .catch( err => console.error( err ) );
}

function deleteUser ( evt ) {
  evt.preventDefault();
  fetch( `${ url }${ inputId.value }`, {
    method: 'DELETE',
  } )
    .then( response => response.json() )
    .then( data => {
      if ( data.errors.length === 0 ) return data;
      throw new Error( `Error: ${ data.errors }. Status: ${ data.status }` );
    } )
    .then( data => {
      result.innerHTML = null;
      const item = data.data;
      const outData = `
        <tr>
          <td>${ item.id }</td>
          <td>${ item.name }</td>
          <td>${ item.age }</td>
        </tr>`;
      rowData = outData;
      result.innerHTML = rowData;
      inputId = '';
    } )
    .catch( err => console.error( err ) );
}

function updateUser ( evt ) {
  evt.preventDefault();
  fetch( `${ url }${ inputId.value }`, {
    method: 'PUT',
    body: JSON.stringify( {
      name: `${ inputGetByName.value }`,
      age: `${ inputGetByAge.value }`,
    } ),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  } )
    .then( response => response.json() )
    .then( data => {
      if ( data.errors.length === 0 ) return data;
      throw new Error( `Error: ${ data.errors }. Status: ${ data.status }` );
    } )
    .then( data => {
      result.innerHTML = null;
      const item = data.data;
      const outData = `
        <tr>
          <td>${ item.id }</td>
          <td>${ item.name }</td>
          <td>${ item.age }</td>
        </tr>`;
      rowData = outData;
      result.innerHTML = rowData;
      inputId = '';
      inputGetByName = '';
      inputGetByAge = '';
    } )
    .catch( err => console.error( err ) );
}
