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

let user3 = new user("maximo", "maximi", "1592");

let user4 = new user("vale", "valentina", "1672");

usuarios.push(user1, user2);

const newUser = () => {
  let name = prompt("ingrese su nombre".toLowerCase());
  let email = prompt("ingrese su email".toLowerCase());
  let password = prompt("ingrese contraseña".toLowerCase());
  let confirmPassword = prompt("confirme contraseña".toLowerCase());
  let passwordEnd = "";

  do {
    if (password === confirmPassword) {
      passwordEnd = confirmPassword;
      confirm("deseas recordar tu contraseña");
    } else {
      alert("la contraseña debe coincidir");
      confirmPassword = prompt("confirme contraseña".toLowerCase());
    }
  } while (password != confirmPassword);

  let newUser = new user(name, email, passwordEnd);

  let confirmed = confirm("confirme para continuar");
  if (confirmed === true) {
    usuarios.push(newUser);
    confirm("su cuenta ha sido creada");
  } else {
    confirm("su cuenta no se ha crado");
  }
};

newUser();

// let emailRecovery = usuarios.find((user) => user.email === email);
const passwordREcovery = () => {
  let email = prompt("ingresa tu email por favor").toLowerCase();
  if (usuarios.find((user) => user.email === email)) {
    let name = usuarios.find((user) => user.email === email).name;
    confirm(
      name + " te hemos enviado un email para reestablecer tu contraseña"
    );
  } else {
    alert("este email no se encuentra registrado");
  }
};

const login = () => {
  let email = prompt("ingrese su email").toLowerCase();
  let password = prompt("ingrese su contraseña").toLowerCase();

  if (
    usuarios.find((user) => user.email === email && user.password === password)
  ) {
    confirm("has logrado acceder exitosamente");
  } else {
    alert("la contraseña no coincide o el email no se encuentra registrado");
    let confirmed = confirm("deseas recuperar tu contraseña?");
    if (confirmed === true) {
      passwordREcovery();
    }
  }
};

login();

const findFriends = () => {
  let nameFriend = prompt("como se llama tu amigo?");
  let friends = usuarios.filter((user) => user.name.match(nameFriend));
  let friendsString = [];

  for (const friend of friends) {
    friendsString.push(friend.name);
  }

  if (friendsString.toString() === nameFriend) {
    confirm(`tu amigo ${friendsString.toString()} se encuentra en este lugar`);
  } else {
    confirm(
      `lo sentimos mucho pero tu amigo ${friendsString.toString()} no se encuentre`
    );
  }
  console.log(friendsString.toString());
  console.log(friends);
};

findFriends();
