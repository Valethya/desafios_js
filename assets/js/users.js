const usuarios = [];

class user {
  constructor(name, email, password, urlimg, page) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.img = urlimg;
    this.page = page;
  }
}

let user1 = new user(
  "her",
  "hernan@her.com",
  "12345",
  "assets/img/her.jpg",
  "index.html"
);

let user2 = new user(
  "max",
  "maxi@max.com",
  "1542",
  "assets/img/maxi.jpg",
  "index.html"
);

let user3 = new user(
  "maximo",
  "maximi@maxim.com",
  "1592",
  "assets/img/maximo.jpg",
  "index.html"
);

let user4 = new user(
  "vale",
  "valentina@valen.com",
  "1672",
  "assets/img/vale.jpg",
  "index.html"
);

let user5 = new user(
  "admin",
  "admin@admin.com",
  "admin",
  "assets/img/vale.jpg",
  "admin.html"
);

usuarios.push(user1, user2, user3, user4, user5);

const getInputValue = (id) => {
  document.getElementById(id).value;
};
