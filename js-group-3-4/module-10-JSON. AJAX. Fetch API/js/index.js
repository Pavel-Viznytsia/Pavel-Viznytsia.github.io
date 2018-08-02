const getAllBtn = document.querySelector('.getAllBtn');
const inputId = document.querySelector('.inputId');
const getByIdBtn = document.querySelector('.getByIdBtn');
const inputGetByName = document.querySelector('.getByName');
const inputGetByAge = document.querySelector('.getByAge');
const addBtn = document.querySelector('.addBtn');
const delBtn = document.querySelector('.delBtn');
const updateBtn = document.querySelector('.updateBtn');
const outData = document.querySelector('.outData');
const url = 'https://test-users-api.herokuapp.com/users/';

getAllBtn.addEventListener('click', getAllUsers);
getByIdBtn.addEventListener('click', getUserById);
addBtn.addEventListener('click', addUser);
delBtn.addEventListener('click', deleteUser);
updateBtn.addEventListener('click', updateUser);

function getAllUsers(evt) {
  evt.preventDefault();
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.errors.length === 0) return data;
      throw new Error(`Error: ${data.errors}. Status: ${data.status}`);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function getUserById(evt) {
  evt.preventDefault();
  fetch(`${url}${inputId.value}`)
    .then(response => response.json())
    .then(data => {
      if (data.errors.length === 0) return data;
      throw new Error(`Error: ${data.errors}. Status: ${data.status}`);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function addUser(evt) {
  evt.preventDefault();
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: `${inputGetByName.value}`,
      age: `${inputGetByAge.value}`,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      if (data.errors.length === 0) return data;
      throw new Error(`Error: ${data.errors}. Status: ${data.status}`);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function deleteUser(evt) {
  evt.preventDefault();
  fetch(`${url}${inputId.value}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      if (data.errors.length === 0) return data;
      throw new Error(`Error: ${data.errors}. Status: ${data.status}`);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function updateUser(evt) {
  evt.preventDefault();
  fetch(`${url}${inputId.value}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: `${inputGetByName.value}`,
      age: `${inputGetByAge.value}`,
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.errors.length === 0) return data;
      throw new Error(`Error: ${data.errors}. Status: ${data.status}`);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
