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
