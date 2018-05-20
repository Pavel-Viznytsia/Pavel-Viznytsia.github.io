const initialUsers = [
  {
    id: '-s19a6hqce',
    login: 'mangozedog@mail.com',
    password: 'qwe123zv',
    isActive: true,
  },
  {
    id: '-qkpzenjxe',
    login: 'polysweet@skynet.ze',
    password: '123zxc78',
    isActive: true,
  },
  {
    id: '-e51cpd4di',
    login: 'ajax2k@change.ua',
    password: 'ert234qw',
    isActive: false,
  },
];

const initialPosts = {
  '-s19a6hqce': [
    { id: '-5sgljaskg', text: 'post #1', likes: 3 },
    { id: '-199hb6igr', text: 'post #2', likes: 5 },
    { id: '-hy0eyw5qo', text: 'post #3', likes: 13 },
  ],
  '-qkpzenjxe': [
    { id: '-5tu69g5rf', text: 'post #1', likes: 8 },
    { id: '-bje766393', text: 'post #2', likes: 15 },
  ],
  '-e51cpd4di': [
    { id: '-9y6nkmlj4', text: 'post #1', likes: 18 },
    { id: '-i03pbhy3s', text: 'post #2', likes: 45 },
  ],
};

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.getId = () =>
    '-' +
    Math.random()
      .toString(36)
      .substr(2, 9);

  this.getAllUsers = () => this.users;

  this.getUserByLogin = login => this.users.find(user => user.login === login);

  this.getUserStatus = userId => {
    const getUserStatus = this.users.find(user => user.id === userId);
    return getUserStatus.isActive ? 'active' : 'inactive';
  };

  this.addUser = user => {
    const newUser = {
      ...user,
      id: this.getId(),
      isActive: false,
    };
    this.users.push(newUser);
    return this.users;
  };

  this.removeUserById = userId => {
    const removeUser = this.users.filter(user => user.id !== userId);
    return (this.users = removeUser);
  };

  this.getUsersCount = () => this.getAllUsers().reduce(acc => acc + 1, 0);
}

const socialBook1 = new SocialBook(initialUsers, initialPosts);
console.log('getAllUsers(): ', socialBook1.getAllUsers());
console.log(
  'getUserByLogin(): ',
  socialBook1.getUserByLogin('mangozedog@mail.com'),
);
console.log('getUserStatus(): ', socialBook1.getUserStatus('-qkpzenjxe'));
console.log('getUserStatus(): ', socialBook1.getUserStatus('-e51cpd4di'));

const user1 = {
  email: 'xxx@yyy.zzz',
  password: 'qwerty',
};
const user2 = {
  email: 'qqq@www.eee',
  password: 'asdzxc',
};

console.log('addUser(): ', socialBook1.addUser(user1));
console.log('addUser(): ', socialBook1.addUser(user1));
console.log('addUser(): ', socialBook1.addUser(user1));
console.log('addUser(): ', socialBook1.addUser(user1));
console.log('addUser(): ', socialBook1.addUser(user1));
console.log('addUser(): ', socialBook1.addUser(user1));
console.log('addUser(): ', socialBook1.addUser(user1));
console.log('addUser(): ', socialBook1.addUser(user2));
console.log('addUser(): ', socialBook1.addUser(user2));
console.log('getAllUsers(): ', socialBook1.getAllUsers());
console.log('removeUserById(): ', socialBook1.removeUserById('-qkpzenjxe'));
console.log('removeUserById(): ', socialBook1.removeUserById('-e51cpd4di'));
console.log('getUsersCount(): ', socialBook1.getUsersCount());
