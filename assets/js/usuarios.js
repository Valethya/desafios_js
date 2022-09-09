const usuarios = [];

class user {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

let user1 = new user("her", "hernan", "12345");

let user2 = new user("max", "maxi", "1542");

let user3 = new user("vale", "valentina", "1672");

usuarios.push(user1, user2);

console.log(usuarios);
