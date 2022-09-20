const usuarios = [];

class user {
  constructor(name, email, password, urlimg) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.img = urlimg;
  }
}

let user1 = new user("her", "hernan@her.com", "12345", "assets/img/her.jpg");

let user2 = new user("max", "maxi@max.com", "1542", "assets/img/maxi.jpg");

let user3 = new user(
  "maximo",
  "maximi@maxim.com",
  "1592",
  "assets/img/maximo.jpg"
);

let user4 = new user(
  "vale",
  "valentina@valen.com",
  "1672",
  "assets/img/vale.jpg"
);

usuarios.push(user1, user2, user3, user4);

const getInputValue = (id) => {
  document.getElementById(id).value;
};
