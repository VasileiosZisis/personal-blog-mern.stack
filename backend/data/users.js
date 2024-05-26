import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Creator User',
    email: 'vasil.zisis@gmail.com',
    password: bcrypt.hashSync('6p9y3lue8j', 10),
    isAdmin: true,
  },
  {
    name: 'Guest User',
    email: 'goneaway182@gmail.com',
    password: bcrypt.hashSync('u33w6bn8kk', 10),
    isAdmin: false,
  },
];

export default users;
