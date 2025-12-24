import bcrypt from 'bcryptjs';

const users = [
    {
      firstName: 'Tony',
      lastName: 'Stark',
      email: 'tony@stark.com',
      password: bcrypt.hashSync('password123', 10), // Mot de passe hashé
    },
    {
      firstName: 'Steve',
      lastName: 'Rogers',
      email: 'steve@rogers.com',
      password: bcrypt.hashSync('password456', 10),
    },
  ];
  
  export default users;