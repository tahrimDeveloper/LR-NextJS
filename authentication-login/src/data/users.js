const users = [
  {
    email: 'tahrimsdotcom@gmail.com',
    password: '111111',
    name: 'Tahrim S. Rahman',
  },
  {
    email: 'abutaha@email.com',
    password: '098765',
    name: 'Taha Abu',
  },
  {
    email: 'asifadnan@gmail.com',
    password: '224466',
    name: 'Asif Adnan',
  },
];

export const getUserByEmail = email => {
  const found = users.find(user => user.email === email);
  return found;
};
